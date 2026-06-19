import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPass, setMostrarPass] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = async () => {
    if (!documento || !password) {
      setMensaje("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documento,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMensaje(data.detail);
        return;
      }

      setMensaje("Login exitoso ✅");

      setTimeout(() => {
        router.push("/cuenta");
      }, 800);
    } catch (error) {
      console.log(error);
      setMensaje("Error conectando con el servidor");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formBox}>

        <Text style={styles.title}>FINANCIERO</Text>
        <Text style={styles.title}>Inicio</Text>

        <Text style={styles.label}>Documento</Text>
        <TextInput
          style={styles.input}
          value={documento}
          onChangeText={setDocumento}
          placeholder="Ingrese documento"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Contraseña</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!mostrarPass}
            value={password}
            onChangeText={setPassword}
            placeholder="Ingrese contraseña"
            placeholderTextColor="#999"
          />

          <TouchableOpacity
            style={styles.eyeBtn}
            onPress={() => setMostrarPass(!mostrarPass)}
          >
            <Text style={styles.eyeText}>
              {mostrarPass ? "🙈" : "👁️"}
            </Text>
          </TouchableOpacity>
        </View>

        {mensaje ? (
          <Text
            style={[
              styles.message,
              {
                color: mensaje.includes("exitoso")
                  ? "#00ff88"
                  : "#ff4c4c",
              },
            ]}
          >
            {mensaje}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={manejarSubmit}
        >
          <Text style={styles.buttonText}>ingreso</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          ¿No tienes cuenta?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/Registro")}
          >
            Regístrate aquí
          </Text>
        </Text>

        <Text style={styles.loginText}>
          ¿Olvidaste tu contraseña?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/recuperar")}
          >
            Recupérala aquí
          </Text>
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} Financiero. Todos los derechos reservados.
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f2c",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  formBox: {
    width: "100%",
    maxWidth: 350,
  },

  circleImage: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 4,
    borderColor: "#d4a017",
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f5c542",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#1e2a4a",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 10,
    color: "#fff",
    padding: 12,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e2a4a",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 10,
  },

  passwordInput: {
    flex: 1,
    color: "#fff",
    padding: 12,
  },

  eyeBtn: {
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  eyeText: {
    fontSize: 18,
  },

  button: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  message: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  loginText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    fontSize: 13,
  },

  link: {
    color: "#3b82f6",
    fontWeight: "bold",
  },

  footer: {
    marginTop: 30,
  },

  footerText: {
    color: "#aaa",
    textAlign: "center",
    fontSize: 12,
  },
});