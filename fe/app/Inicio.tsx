import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPass, setMostrarPass] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const irRegistro = () => {
    router.push("/Registro");
  };

  const irRecuperar = () => {
    router.push("/recuperar");
  };

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

      console.log(data);

      if (!res.ok) {
        setMensaje(data.detail);
        return;
      }

      setMensaje("Login exitoso ✅");

      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("documento", documento);
      await AsyncStorage.setItem("usuario_id", String(data.id));

      setTimeout(() => {
        router.push("/cuenta");
      }, 800);
    } catch (error) {
      console.error(error);
      setMensaje("Error conectando con el servidor");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Inicio</Text>

        <Text style={styles.label}>Documento</Text>

        <View style={styles.inputIcon}>
          <TextInput
            style={styles.input}
            value={documento}
            onChangeText={setDocumento}
            placeholderTextColor="#999"
          />
        </View>

        <Text style={styles.label}>Contraseña</Text>

        <View style={styles.inputIcon}>
          <TextInput
            style={styles.input}
            secureTextEntry={!mostrarPass}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#999"
          />

          <TouchableOpacity
            style={styles.eyeBtn}
            onPress={() => setMostrarPass(!mostrarPass)}
          >
            <Text>{mostrarPass ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        {mensaje ? (
          <Text
            style={[
              styles.mensaje,
              {
                color: mensaje.includes("exitoso")
                  ? "green"
                  : "#ff4c4c",
              },
            ]}
          >
            {mensaje}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.btn}
          onPress={manejarSubmit}
        >
          <Text style={styles.btnText}>Acceder</Text>
        </TouchableOpacity>

        <Text style={styles.login}>
          ¿No tienes cuenta?{" "}
          <Text style={styles.link} onPress={irRegistro}>
            Regístrate aquí
          </Text>
        </Text>

        <Text style={styles.login}>
          ¿Olvidaste tu contraseña?{" "}
          <Text style={styles.link} onPress={irRecuperar}>
            Recupérala aquí
          </Text>
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} Financiero. Todos los derechos
            reservados.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0f2c",
    justifyContent: "center",
    alignItems: "center",
  },

  formBox: {
    width: 350,
  },

  title: {
    textAlign: "center",
    color: "#f5c542",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    color: "#fff",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
  },

  inputIcon: {
    position: "relative",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    padding: 10,
    paddingRight: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555",
    backgroundColor: "#1e2a4a",
    color: "#fff",
  },

  eyeBtn: {
    position: "absolute",
    right: 5,
    width: 40,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#0f1a35",
    justifyContent: "center",
    alignItems: "center",
  },

  mensaje: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  btn: {
    width: "100%",
    marginTop: 20,
    padding: 12,
    backgroundColor: "#000",
    borderRadius: 12,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  login: {
    color: "#fff",
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
  },

  link: {
    color: "#3b82f6",
  },

  footer: {
    marginTop: 25,
  },

  footerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
});