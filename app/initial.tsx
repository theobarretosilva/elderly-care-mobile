import { Image, View } from "react-native";
import { initialStyles } from "@/src/styles/initial.styles";

export default function Initial() {
    return (
        <View style={initialStyles.container}>
            <Image 
                style={initialStyles.img}
                source={require('../assets/images/logo_canto.svg')}
            />
        </View>
    )
}