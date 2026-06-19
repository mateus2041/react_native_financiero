import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function RecuperarContrasena() {
  const router = useRouter();

  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");

  const recuperarPassword = async () => {
    if (!documento || !correo) {
      Alert.alert(
        "Error",
        "Completa todos los campos"
      );
      return;
    }

    try {
      const response = await fetch(
        "http://10.0.2.2:8000/recuperar-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documento,
            correo,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert(
          "Éxito",
          "Se ha enviado la información de recuperación."
        );
      } else {
        Alert.alert(
          "Error",
          data.detail || "No se pudo recuperar la cuenta"
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo conectar con el servidor"
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>
          FINANCIERO
        </Text>

        <Text style={styles.subtitle}>
          Recuperar Contraseña
        </Text>

        <Text style={styles.label}>
          Número de Documento
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su documento"
          placeholderTextColor="#777"
          value={documento}
          onChangeText={setDocumento}
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          Correo Electrónico
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo"
          placeholderTextColor="#777"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={recuperarPassword}
        >
          <Text style={styles.buttonText}>
            Recuperar Contraseña
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/Inicio")}
        >
          <Text style={styles.backText}>
            Volver al inicio de sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f16",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  formBox: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#1a2238",
    borderRadius: 20,
    padding: 25,
  },

  title: {
    color: "#f2c94c",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    color: "#a8b3cf",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#131a2c",
    color: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#355dff",
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  backText: {
    color: "#f2c94c",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
});