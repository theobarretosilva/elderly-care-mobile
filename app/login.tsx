import { router } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native";
import { loginStyles } from "../src/styles/login.styles";
import { Checkbox } from 'expo-checkbox';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  function handleLogin() {
    // Aqui depois vamos conectar com a API
    console.log({ email, password });

    // Simulação de login → entra no app
    router.replace("/(tabs)");
  }

  return (
    <KeyboardAvoidingView
      style={loginStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={loginStyles.container}>
        <Image 
          style={loginStyles.logoTopo}
          source={require('../assets/images/logo_fundo_claro.png')}
        />
        <Text style={loginStyles.txtBemVindo} >Bem-vindo(a) de volta 👋</Text>
        <Text style={loginStyles.txtAcompanhe}>Acompanhe o cuidado em tempo real</Text>
        <Text style={loginStyles.txtInsira}>Insira suas informações:</Text>
        <TextInput 
          style={loginStyles.input}
          placeholder="E-mail"
        />
        <TextInput 
          style={loginStyles.input}
          placeholder="Senha"
        />
        <View style={loginStyles.viewBaixoSenha}>
          <View style={loginStyles.sectionCheck}>
            <Checkbox style={loginStyles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={loginStyles.txtCheck}>Manter conectado</Text>
          </View>
          <Text>Esqueci a senha</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
