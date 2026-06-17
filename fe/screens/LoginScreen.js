import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { API_URL } from "../services/api";

export default function LoginScreen() {
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documento,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert("Error", data.detail);
        return;
      }

      Alert.alert("Éxito", data.token);
      console.log(data.token);

    } catch (error) {
      Alert.alert("Error", "No se pudo conectar al servidor");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Documento</Text>
      <TextInput
        value={documento}
        onChangeText={setDocumento}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Password</Text>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Login" onPress={login} />
    </View>
  );
}