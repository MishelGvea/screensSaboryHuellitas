import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleLogin = () => {
    // Aquí puedes manejar la autenticación
    console.log("Login con:", email, password);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121c17" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#ffffff", marginBottom: 20 }}>Sabor y Huellitas</Text>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Correo Electrónico</Text>
        <TextInput
          placeholder={isFocusedEmail ? "" : "Ingresa tu correo"}
          placeholderTextColor="#7d7d7d"
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(email.length > 0)}
        />
      </View>
      
      <View style={{ width: "80%", marginBottom: 10 }}>
        <Text style={{ color: "#ffcc00", fontSize: 16, marginBottom: 5 }}>Contraseña</Text>
        <TextInput
          placeholder={isFocusedPassword ? "" : "Ingresa tu contraseña"}
          placeholderTextColor="#7d7d7d"
          style={{ padding: 12, borderWidth: 1, borderRadius: 10, backgroundColor: "#e0e0e0", color: "#121c17" }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(password.length > 0)}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "#ffcc00", padding: 12, borderRadius: 10, width: "80%", alignItems: "center" }}>
        <Text style={{ color: "#121c17", fontSize: 16, fontWeight: "bold" }}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Ir a registro")}>
        <Text style={{ marginTop: 15, color: "#ffcc00" }}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;