import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const Cuenta = () => {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState("");
  const [documento, setDocumento] = useState("");
  const [totalIngresos, setTotalIngresos] = useState(1200);
  const [totalGastos, setTotalGastos] = useState(500);
  const [openTransfer, setOpenTransfer] = useState(false);

  // CARGAR DOCUMENTO
  useEffect(() => {
    const cargarDocumento = async () => {
      const doc = await AsyncStorage.getItem("documento");

      if (!doc) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Index" }], // o "Login"
        });
        return;
      }

      setDocumento(doc);
    };

    cargarDocumento();
  }, []);

  // OBTENER USUARIO
  useEffect(() => {
    if (!documento) return;

    const obtenerUsuario = async () => {
      try {
        const res = await fetch(
          `http://10.0.2.2:8000/usuario-documento/${documento}`
        );

        const data = await res.json();

        console.log("RESPUESTA API:", data);

        setUsuario(
          data?.nombre ||
          data?.usuario?.nombre ||
          data?.data?.nombre ||
          "Usuario"
        );
      } catch (error) {
        console.log("ERROR API:", error);
        setUsuario("Usuario");
      }
    };

    obtenerUsuario();
  }, [documento]);

  // LOGOUT
  const handleLogout = async () => {
    await AsyncStorage.multiRemove([
      "token",
      "usuario",
      "documento",
    ]);

    navigation.reset({
      index: 0,
      routes: [{ name: "Index" }], // 🔥 aquí va tu index.tsx
    });
  };

  return (
    <View style={styles.container}>
      {/* SIDEBAR */}
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={() => navigation.navigate("Cuenta")}>
          <Text style={styles.menuText}>💷 Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Historial")}>
          <Text style={styles.menuText}>📜 Historial Monetario</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOpenTransfer(!openTransfer)}>
          <Text style={styles.menuText}>
            💳 Otros {openTransfer ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>

        {openTransfer && (
          <View style={styles.submenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Transferencias")}>
              <Text style={styles.submenuText}>➡ Enviar dinero</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Cuentas")}>
              <Text style={styles.submenuText}>🧾 Transferir</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Certificado")}>
          <Text style={styles.menuText}>📄 Certificado Bancario</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Ajustes")}>
          <Text style={styles.menuText}>⚙️ Ajustes</Text>
        </TouchableOpacity>

        {/* 🔥 BOTÓN LOGOUT */}
        <TouchableOpacity onPress={() => navigation.navigate("index")}>
          <Text style={styles.logoutText}>🚪 Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      {/* MAIN */}
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Bienvenido {usuario}
          </Text>

          <Image
            source={{
              uri: "https://i.pinimg.com/736x/e0/06/16/e00616c1e181f83b35b157f9281bd36e.jpg",
            }}
            style={styles.avatar}
          />
        </View>

        {/* TARJETAS */}
        <View style={styles.stats}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Ingresos</Text>
            <Text style={styles.cardValue}>${totalIngresos}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Cuenta</Text>
            <Text style={styles.cardValue}>
              ${totalIngresos - totalGastos}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Gastos</Text>
            <Text style={styles.cardValue}>${totalGastos}</Text>
          </View>
        </View>

        {/* GRÁFICA */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>
            Porcentaje de dinero
          </Text>

          <LineChart
            data={{
              labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
              datasets: [
                {
                  data: [45, 60, 50, 80, 65, 90, 100],
                  color: () => "#f2c94c",
                  strokeWidth: 3,
                },
                {
                  data: [25, 40, 35, 60, 45, 70, 80],
                  color: () => "#355dff",
                  strokeWidth: 3,
                },
              ],
            }}
            width={screenWidth - 70}
            height={250}
            bezier
            chartConfig={{
              backgroundGradientFrom: "#1a2238",
              backgroundGradientTo: "#1a2238",
              decimalPlaces: 0,
              color: (opacity = 1) =>
                `rgba(242,201,76,${opacity})`,
              labelColor: () => "#fff",
            }}
            style={{ borderRadius: 15 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Cuenta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0b0f16",
  },

  sidebar: {
    width: 220,
    backgroundColor: "#121829",
    padding: 15,
    justifyContent: "space-between",
  },

  menuText: {
    color: "#a8b3cf",
    fontSize: 16,
    marginVertical: 10,
  },

  submenu: {
    marginLeft: 20,
  },

  submenuText: {
    color: "#f2c94c",
    marginVertical: 5,
  },

  logout: {
    backgroundColor: "#355dff",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },

  logoutText: {
    color: "#fff",
    textAlign: "center",
  },

  main: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#f2c94c",
    fontSize: 24,
    fontWeight: "bold",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "#1a2238",
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 15,
  },

  cardTitle: {
    color: "#a8b3cf",
  },

  cardValue: {
    color: "#f2c94c",
    fontSize: 20,
    fontWeight: "bold",
  },

  chartCard: {
    backgroundColor: "#1a2238",
    padding: 20,
    borderRadius: 20,
  },

  chartTitle: {
    color: "#fff",
    marginBottom: 15,
    fontSize: 18,
  },
});