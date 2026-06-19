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
import { useRouter } from "expo-router";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Cuenta() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [documento, setDocumento] = useState("");
  const [totalIngresos, setTotalIngresos] = useState(1200);
  const [totalGastos, setTotalGastos] = useState(500);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const doc = await AsyncStorage.getItem("documento");
      const id_u = await AsyncStorage.getItem("usuario_id");

      if (!doc) {
        router.replace("/");
        return;
      }

      setDocumento(doc);
      setId(id_u || "");
    };

    cargarDatos();
  }, []);

  useEffect(() => {
    if (!id) return;

    const obtenerUsuario = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/usuario/${id}`
        );

        const data = await res.json();

        if (res.ok && data?.nombre) {
          setUsuario(data.nombre);
        } else {
          setUsuario("Usuario");
        }
      } catch (error) {
        console.log(error);
        setUsuario("Usuario");
      }
    };

    obtenerUsuario();
  }, [id]);

  const cerrarSesion = async () => {
    await AsyncStorage.multiRemove([
      "token",
      "usuario",
      "documento",
    ]);

    router.replace("/");
  };

  return (
    <View style={styles.container}>
      {/* SIDEBAR */}
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/cuenta")}
        >
          <Text style={styles.menuText}>💷 Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/historial")}
        >
          <Text style={styles.menuText}>
            📜 Historial Monetario
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setOpenTransfer(!openTransfer)}
        >
          <Text style={styles.menuText}>
            💳 Otros {openTransfer ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>

        {openTransfer && (
          <View style={styles.submenu}>
            <TouchableOpacity
              onPress={() =>
                router.push("/transferencias")
              }
            >
              <Text style={styles.submenuText}>
                ➡ Enviar dinero
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                router.push("/cuenta")
              }
            >
              <Text style={styles.submenuText}>
                🧾 Transferir
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/certificado")}
        >
          <Text style={styles.menuText}>
            📄 Certificado Bancario
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push("/ajustes")}
        >
          <Text style={styles.menuText}>⚙️ Ajustes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logout}
          onPress={cerrarSesion}
        >
          <Text style={styles.logoutText}>
            🚪 Cerrar sesión
          </Text>
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
            <Text style={styles.cardTitle}>
              Ingresos
            </Text>
            <Text style={styles.cardValue}>
              ${totalIngresos}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Cuenta
            </Text>
            <Text style={styles.cardValue}>
              ${totalIngresos - totalGastos}
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Gastos
            </Text>
            <Text style={styles.cardValue}>
              ${totalGastos}
            </Text>
          </View>
        </View>

        {/* GRÁFICA */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>
            Porcentaje de dinero
          </Text>

          <LineChart
            data={{
              labels: [
                "Lun",
                "Mar",
                "Mié",
                "Jue",
                "Vie",
                "Sáb",
                "Dom",
              ],
              datasets: [
                {
                  data: [
                    45, 60, 50, 80, 65, 90, 100,
                  ],
                },
              ],
            }}
            width={screenWidth - 100}
            height={220}
            bezier
            chartConfig={{
              backgroundColor: "#1a2238",
              backgroundGradientFrom: "#1a2238",
              backgroundGradientTo: "#1a2238",
              decimalPlaces: 0,
              color: (opacity = 1) =>
                `rgba(242,201,76,${opacity})`,
              labelColor: (opacity = 1) =>
                `rgba(255,255,255,${opacity})`,
            }}
            style={{
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

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

  menuButton: {
    paddingVertical: 12,
  },

  menuText: {
    color: "#a8b3cf",
    fontSize: 15,
  },

  submenu: {
    marginLeft: 15,
    marginBottom: 10,
  },

  submenuText: {
    color: "#f2c94c",
    paddingVertical: 6,
  },

  logout: {
    backgroundColor: "#355dff",
    padding: 12,
    borderRadius: 10,
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
    marginTop: 20,
  },

  card: {
    backgroundColor: "#1a2238",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#a8b3cf",
    fontSize: 14,
  },

  cardValue: {
    color: "#f2c94c",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },

  chartCard: {
    backgroundColor: "#1a2238",
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 30,
  },

  chartTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15,
  },
});