import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const imgLivingRoom = require("../../assets/5.webp");
const imgDevice = require("../../assets/6.webp");

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#FFD700" />
        <Text style={styles.title}>Inicio</Text>
      </View>

      {/* Temperature Section */}
      <Text style={styles.temperature}>24°</Text>
      <Text style={styles.humidity}>Temperatura | Humedad 28%</Text>

      {/* Image Section */}
      <Image source={imgLivingRoom} style={styles.image} />

      {/* Category Navigation */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        <Text style={[styles.category, styles.activeCategory]}>Todas</Text>
        <Text style={styles.category}>Dormitorio</Text>
        <Text style={styles.category}>Comedor</Text>
        <Text style={styles.category}>Cocina</Text>
        <Text style={styles.category}>Baño</Text>
      </ScrollView>

      {/* Device List */}
      <View style={styles.devicesContainer}>
        <View style={[styles.deviceCard, styles.activeDevice]}>
          <Ionicons name="power" size={24} color="white" />
          <Text style={styles.deviceTitle}>Dispensador de Alimento</Text>
          <Text style={styles.deviceSubtitle}>Cocina | On</Text>
        </View>

        <View style={styles.deviceCard}>
          <Image source={imgDevice} style={styles.deviceIcon} />
          <Text style={styles.deviceTitle}>Aire Acondicionado</Text>
          <Text style={styles.deviceSubtitle}>Comedor | Off</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#0a0f12", flex: 1, paddingHorizontal: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  title: { fontSize: 22, fontWeight: "bold", color: "#FFD700", textShadowColor: "rgba(0, 0, 0, 0.7)", textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 4 },
  temperature: { fontSize: 32, fontWeight: "bold", marginTop: 10, color: "white" },
  humidity: { color: "#bdbaba", marginBottom: 10 },
  image: { width: "100%", height: 180, borderRadius: 10, marginBottom: 10 },
  categories: { flexDirection: "row", marginBottom: 10 },
  category: { fontSize: 16, marginRight: 15, color: "#b3b3b3" },
  activeCategory: { color: "#FFD700", fontWeight: "bold" },
  devicesContainer: { flexDirection: "row", justifyContent: "space-between" },
  deviceCard: { backgroundColor: "rgba(255, 255, 255, 0.85)", padding: 20, borderRadius: 10, width: "48%", alignItems: "center", elevation: 3 },
  activeDevice: { backgroundColor: "#FFD700", color: "black" },
  deviceTitle: { fontWeight: "bold", marginTop: 5, color: "black" },
  deviceSubtitle: { color: "#333", fontSize: 12 },
  deviceIcon: { width: 30, height: 30, tintColor: "gray" },
});

export default HomeScreen;
