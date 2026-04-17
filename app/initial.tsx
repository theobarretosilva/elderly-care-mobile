import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { initialStyles } from "@/src/styles/initial.styles";
import { router } from "expo-router";

export default function Initial() {

    return (
            <ImageBackground
                style={initialStyles.container}
                source={require('../assets/images/fundo_initial.svg')}
                resizeMode="contain"
            >
                <Image 
                    style={initialStyles.img}
                    source={require('../assets/images/logo_canto.svg')}
                />
                <Text style={initialStyles.txtInicial}>
                    Acompanhe o cuidado de quem você ama, em tempo real ❤️
                </Text>
                <Pressable style={initialStyles.btnEntrar} onPress={()=>{router.replace("/login")}}>
                    <Text style={initialStyles.txtEntrar}>Entrar</Text>
                </Pressable>
                <Pressable style={initialStyles.btnCriar}>
                    <Text style={initialStyles.txtCriar}>Criar conta</Text>
                </Pressable>
                <Text style={initialStyles.txtFinal} >Para responsáveis e cuidadores</Text>
            </ImageBackground>
        
    )
}