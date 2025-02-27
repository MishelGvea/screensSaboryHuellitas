import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DispensadorScreen: React.FC = () => {
  // Estado para la cantidad de alimento (100% = lleno, 50% = medio, 0% = vacío)
  const [nivelAlimento, setNivelAlimento] = useState<number>(100);

  // Función para dispensar alimento
  const dispensarAlimento = () => {
    setNivelAlimento((prev) => Math.max(0, prev - 25)); // Resta 25 cada vez que presionas
  };

  // Determinar el estado del recipiente
  let estado: string = "Vacío";
  let color: string = "#FFD700"; // Amarillo
  if (nivelAlimento > 75) {
    estado = "Lleno";
    color = "#FFD700"; // Amarillo
  } else if (nivelAlimento > 25) {
    estado = "Mediano";
    color = "#FFA500"; // Naranja oscuro
  } else {
    estado = "Vacío";
    color = "#FF4500"; // Rojo oscuro
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispensador de Alimento</Text>

      {/* Indicador del estado */}
      <View style={[styles.indicador, { backgroundColor: color }]}>
        <Text style={styles.textIndicador}>{estado}</Text>
      </View>

      {/* Barra de progreso manual */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${nivelAlimento}%`, backgroundColor: color }]} />
      </View>

      {/* Mostrar cantidad de alimento */}
      <Text style={styles.nivelText}>Cantidad de alimento: {nivelAlimento}%</Text>

      {/* Botón para dispensar */}
      <TouchableOpacity style={styles.boton} onPress={dispensarAlimento}>
        <Text style={styles.botonTexto}>Dispensar Alimento</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos con amarillo, negro y blanco
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000", // Fondo negro
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700", // Amarillo
    marginBottom: 20,
  },
  indicador: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  textIndicador: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Texto negro
  },
  progressContainer: {
    width: "80%",
    height: 20,
    backgroundColor: "#fff", // Fondo de la barra de progreso blanco
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBar: {
    height: "100%",
  },
  nivelText: {
    fontSize: 16,
    color: "#FFD700", // Amarillo
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#FFF", // Botón blanco
    padding: 15,
    borderRadius: 10,
  },
  botonTexto: {
    color: "#000", // Texto negro
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DispensadorScreen;
