import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Shield,
  Lock,
  RefreshCw,
  Ban,
  FileText,
  ArrowLeftRight,
} from "lucide-react-native";

export default function Inicio() {
  const cards = [
    {
      icon: <Shield size={35} color="#3ddc84" />,
      title: "Seguridad del dinero",
      desc: "El dinero queda asegurado en todo momento.",
    },
    {
      icon: <Lock size={35} color="#f7b733" />,
      title: "Seguridad al iniciar sesión",
      desc: "Garantía total de seguridad en tu acceso.",
    },
    {
      icon: <ArrowLeftRight size={35} color="#6ea8fe" />,
      title: "Transferencias",
      desc: "Transferencias rápidas y seguras.",
    },
    {
      icon: <RefreshCw size={35} color="#ffffff" />,
      title: "Actualización de movimientos",
      desc: "Historial actualizado en tiempo real.",
    },
    {
      icon: <Ban size={35} color="#ff5a5f" />,
      title: "Bloqueo rápido y seguro",
      desc: "Protección ante actividades sospechosas.",
    },
    {
      icon: <FileText size={35} color="#d1c4e9" />,
      title: "Certificado bancario",
      desc: "Documento oficial de tu cuenta.",
    },
  ];

  return (
    <LinearGradient
      colors={["#020b1d", "#03142f", "#020b1d"]}
      style={{ flex: 1 }}
    >
      <ScrollView>
        {/* NAVBAR */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>Financiero</Text>

          <View style={styles.menu}>
            <Text style={styles.link}>Cuenta</Text>
            <Text style={styles.link}>Certificado</Text>
            <Text style={styles.link}>Pre-Be</Text>

           <TouchableOpacity
              style={styles.activeBtn}
              onPress={() => navigation.navigate("Inicio" as never)}
            >
              <Text style={styles.activeText}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.activeBtn}
              onPress={() => navigation.navigate("Registro" as never)}
            >
              <Text style={styles.activeText}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.left}>
            <Text style={styles.title}>
              Compromiso Financiero
            </Text>

            <Text style={styles.description}>
              Somos una compañía financiera nueva que está transformando lo ya
              existente en algo diferente. Comprender los problemas actuales de
              los usuarios y empresas es crucial para construir un servicio más
              robusto y confiable.
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Registrate
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.right}>
            <Image
            source={require("../assets/images/logo.jpeg")}
            style={styles.circleImage}
            />
          </View>
        </View>

        {/* TITULO */}
        <Text style={styles.sectionTitle}>
          Las Garantías De Nuestra Compromiso Financiero
        </Text>

        {/* TARJETAS */}
        <View style={styles.grid}>
          {cards.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.iconContainer}>
                {item.icon}
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardDesc}>
                  {item.desc}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Financiero — Todos los derechos reservados
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#13284f",
  },

  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  link: {
    color: "#fff",
    fontSize: 14,
  },

  activeBtn: {
    backgroundColor: "#d4a017",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },

  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  hero: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },

  left: {
    flex: 1,
    paddingRight: 20,
  },

  right: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    color: "#d4a017",
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20,
  },

  description: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 500,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#2156ff",
    alignSelf: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  circleImage: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 4,
    borderColor: "#d4a017",
  },

  sectionTitle: {
    textAlign: "center",
    color: "#d4a017",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  card: {
    width: "30%",
    minWidth: 300,
    flexDirection: "row",
    backgroundColor: "#0e1d3d",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#1a2c52",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },

  cardDesc: {
    color: "#bfc7d5",
    fontSize: 13,
    lineHeight: 18,
  },

  footer: {
    paddingVertical: 40,
    alignItems: "center",
  },

  footerText: {
    color: "#8f9bb3",
  },
});