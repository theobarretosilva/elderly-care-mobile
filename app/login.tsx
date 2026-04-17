import { router } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";
import { loginStyles } from "../src/styles/login.styles";
import { Checkbox } from 'expo-checkbox';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  function handleLogin() {
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    console.log({ email, password });

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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={loginStyles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={loginStyles.viewBaixoSenha}>
          <View style={loginStyles.sectionCheck}>
            <Checkbox style={loginStyles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={loginStyles.txtCheck}>Manter conectado</Text>
          </View>
          <Text style={loginStyles.txtEsqueci}>Esqueci a senha</Text>
        </View>
        <Pressable
          style={loginStyles.btnEntrar}
          onPress={handleLogin}
          disabled={!email || !password}
        >
          <Text style={loginStyles.txtEntrar}>Entrar</Text>
        </Pressable>
        <Text style={loginStyles.txtNao}>
          Não tem conta?
          <Text style={loginStyles.txtCriar}> Criar conta!</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
