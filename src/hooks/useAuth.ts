import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  async function login(email: string, password: string) {
    if (!email || !password) {
      throw new Error("Preencha todos os campos");
    }

    try {
      setLoading(true);

      const response = await fetch("http://SEU_IP:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      // 💾 salva o token
      await AsyncStorage.setItem("token", data.token);

      return data;

    } catch (error: any) {
      throw new Error(error.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    loading,
  };
}