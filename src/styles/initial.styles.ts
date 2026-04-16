import { StyleSheet } from "react-native";

export const initialStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    img: {
        position: 'absolute',
        marginTop: 25,
        right: 25,
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    txtInicial: {
        fontFamily: 'Urbanist, Arial',
        fontWeight: 700,
        fontSize: 25,
        color: '#FFF',
        width: 300,
        marginTop: 120,
        marginLeft: 25,
    },
    btnEntrar: {
        backgroundColor: '#2F7DCA',
        height: 40,
        width: 'auto',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 430,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        marginLeft: 25,
        marginRight: 25,
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
        alignItems: 'center'
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
        color: "#000",
        fontFamily: 'Urbanist, Arial',
        fontSize: 16,
        fontWeight: 500,
    }
});