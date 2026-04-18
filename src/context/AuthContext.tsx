import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  user: any;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        setToken(storedToken);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function login(email: string, password: string) {
    const response = await fetch("http://SEU_IP:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao logar");
    }

    await AsyncStorage.setItem("token", data.token);

    setToken(data.token);
    setUser(data.user || null);
  }

  async function logout() {
    await AsyncStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}