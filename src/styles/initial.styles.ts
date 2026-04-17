import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const initialStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: height * 1,
        width: width * 1,
        flex: 1
    },
    img: {
        position: 'absolute',
        marginTop: 20,
        right: 20,
        width: width * 0.12,
        height: height * 0.1,
        resizeMode: 'contain',
    },
    txtInicial: {
        fontFamily: 'Urbanist',
        fontWeight: 700,
        fontSize: 26,
        color: '#FFF',
        width: width * 0.7,
        marginTop: 170,
        marginLeft: 30,
    },
    btnEntrar: {
        backgroundColor: '#2F7DCA',
        height: 40,
        width: 'auto',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 400,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    txtEntrar: {
        fontFamily: 'Urbanist, Arial',
        fontSize: 18,
        fontWeight: 600,
        color: '#FFF'
    },
    btnCriar: {
        backgroundColor: '#E0F4FF',
        height: 40,
        width: 'auto',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 5,
        borderColor: '#2F7DCA',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    txtCriar: {
        fontFamily: 'Urbanist, Arial',
        fontSize: 18,
        fontWeight: 600,
        color: '#2F7DCA'
    },
    txtFinal: {
        alignSelf: 'center',
        marginTop: 6,
        color: "#000000",
        fontFamily: 'Urbanist, Arial',
        fontSize: 16,
        fontWeight: 600,
        width: 'auto',
    }
});