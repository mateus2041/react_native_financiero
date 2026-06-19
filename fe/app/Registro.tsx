import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function Registro() {
  const router = useRouter();

  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrar = async () => {
    if (!nombre || !email || !tipo || !documento || !telefono || !password) {
      setMensaje("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          documento,
          password,
          telefono,
          tipo_documento: tipo,
        }),
      });

      let data: any = null;

      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        let errorMsg = "Error al registrar";

        if (typeof data?.detail === "string") {
          errorMsg = data.detail;
        } else if (
          Array.isArray(data?.detail) &&
          data.detail.length > 0
        ) {
          errorMsg =
            data.detail[0]?.msg ||
            JSON.stringify(data.detail[0]);
        }

        setMensaje(errorMsg);
        return;
      }

      setMensaje("Usuario creado correctamente ✅");

      setTimeout(() => {
        router.push("/Inicio");
      }, 1500);
    } catch (error) {
      console.log("ERROR:", error);
      setMensaje("Error conectando con el servidor");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.formBox}>
        <Text style={styles.title}>FINANCIERO</Text>
        <Text style={styles.title}>REGISTRO</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre completo"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Tipo de documento</Text>

        <View style={styles.docContainer}>
          <TouchableOpacity
            style={[
              styles.docButton,
              tipo === "cc" && styles.docButtonActive,
            ]}
            onPress={() => setTipo("cc")}
          >
            <Text style={styles.docText}>CC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.docButton,
              tipo === "ti" && styles.docButtonActive,
            ]}
            onPress={() => setTipo("ti")}
          >
            <Text style={styles.docText}>TI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.docButton,
              tipo === "ce" && styles.docButtonActive,
            ]}
            onPress={() => setTipo("ce")}
          >
            <Text style={styles.docText}>CE</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Número de documento</Text>
        <TextInput
          style={styles.input}
          value={documento}
          onChangeText={setDocumento}
          placeholder="Documento"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Número teléfono</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          placeholder="Teléfono"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        {!!mensaje && (
          <Text
            style={[
              styles.message,
              {
                color: mensaje.includes("✅")
                  ? "#00ff66"
                  : "#ff4c4c",
              },
            ]}
          >
            {String(mensaje)}
          </Text>
        )}

        <TouchableOpacity
          style={styles.btn}
          onPress={registrar}
        >
          <Text style={styles.btnText}>Registrar</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          © {new Date().getFullYear()} Financiero. Todos los
          términos de confidencialidad.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0a0f2c",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  formBox: {
    width: "100%",
    maxWidth: 400,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f5c542",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#1e2a4a",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    padding: 12,
    color: "#fff",
  },

  docContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  docButton: {
    flex: 1,
    backgroundColor: "#1e2a4a",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 3,
    alignItems: "center",
  },

  docButtonActive: {
    backgroundColor: "#f5c542",
  },

  docText: {
    color: "#fff",
    fontWeight: "bold",
  },

  btn: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  message: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  footer: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});