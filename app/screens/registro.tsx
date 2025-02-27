import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121c17", paddingVertical: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#ffffff", marginBottom: 20 }}>Registro</Text>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Nombre Completo</Text>
        <TextInput
          placeholder="Ingresa tu nombre completo"
          placeholderTextColor="#7d7d7d"
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={name}
          onChangeText={setName}
        />
      </View>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Correo Electrónico</Text>
        <TextInput
          placeholder="Ingresa tu correo"
          placeholderTextColor="#7d7d7d"
          keyboardType="email-address"
          autoCapitalize="none"
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Teléfono</Text>
        <TextInput
          placeholder="Ingresa tu número de teléfono"
          placeholderTextColor="#7d7d7d"
          keyboardType="phone-pad"
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Contraseña</Text>
        <TextInput
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#7d7d7d"
          secureTextEntry
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Confirmar Contraseña</Text>
        <TextInput
          placeholder="Repite tu contraseña"
          placeholderTextColor="#7d7d7d"
          secureTextEntry
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#ffcc00", padding: 12, borderRadius: 10, width: "80%", alignItems: "center", marginTop: 10 }}>
        <Text style={{ color: "#121c17", fontSize: 16, fontWeight: "bold" }}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;