import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { useNavigation } from "@react-navigation/native";

export default function CertificadoBancario() {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState({
    nombre: "",
    documento: "",
    cuenta: "",
    tipoCuenta: "Ahorros",
    saldo: "$0 COP",
  });

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const documentoGuardado =
          await AsyncStorage.getItem("documento");

        if (!documentoGuardado) {
          navigation.navigate("Inicio");
          return;
        }

        const response = await fetch(
          `http://127.0.0.1:8000/usuario-documento/${documentoGuardado}`
        );

        const data = await response.json();

        setUsuario({
          nombre: data.nombre || "Usuario",
          documento: data.documento || documentoGuardado,
          cuenta: data.numero_cuenta || "9800456721",
          tipoCuenta: data.tipo_cuenta || "Ahorros",
          saldo: data.saldo
            ? `$${Number(data.saldo).toLocaleString("es-CO")} COP`
            : "$0 COP",
        });
      } catch (error) {
        console.log(error);
      }
    };

    cargarUsuario();
  }, []);

  const fechaActual = new Date().toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const generarPDF = async () => {
    const html = `
      <html>
      <body style="padding:20px;font-family:Arial">
        <h1 style="text-align:center">FINANCIERO</h1>

        <h2>HACE CONSTAR:</h2>

        <p>
          Que el cliente <b>${usuario.nombre}</b>
          identificado con CC ${usuario.documento}
          posee una cuenta de ahorros.
        </p>

        <h3>Datos de la cuenta</h3>

        <p><b>Número:</b> ${usuario.cuenta}</p>
        <p><b>Fecha:</b> ${fechaActual}</p>

        <br/>

        <p>
          Esta constancia se expide a solicitud
          del interesado.
        </p>

        <br/><br/>

        <p>Firma autorizada</p>
        <p>FINANCIERO</p>
      </body>
      </html>
    `;

    const file = await RNHTMLtoPDF.convert({
      html,
      fileName: `Certificado_${usuario.documento}`,
      directory: "Documents",
    });

    Alert.alert("PDF generado", file.filePath);
  };

  const cerrarSesion = async () => {
    await AsyncStorage.multiRemove([
      "token",
      "usuario",
      "documento",
    ]);

    navigation.navigate("Inicio");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Certificado Bancario
        </Text>

        <View style={styles.card}>
          <Text style={styles.logo}>FINANCIERO</Text>

          <Text style={styles.subtitle}>
            HACE CONSTAR:
          </Text>

          <Text style={styles.text}>
            Que el cliente {usuario.nombre}
          </Text>

          <Text style={styles.text}>
            CC {usuario.documento}
          </Text>

          <Text style={styles.text}>
            Cuenta: {usuario.cuenta}
          </Text>

          <Text style={styles.text}>
            Tipo: {usuario.tipoCuenta}
          </Text>

          <Text style={styles.text}>
            Saldo: {usuario.saldo}
          </Text>

          <Text style={styles.text}>
            Fecha: {fechaActual}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={generarPDF}
        >
          <Text style={styles.buttonText}>
            Descargar PDF
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logout}
          onPress={cerrarSesion}
        >
          <Text style={styles.buttonText}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f16",
    padding: 20,
  },

  title: {
    color: "#f2c94c",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#1a2238",
    borderRadius: 15,
    padding: 20,
  },

  logo: {
    fontSize: 30,
    color: "#f2c94c",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#355dff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  logout: {
    backgroundColor: "#d63031",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});