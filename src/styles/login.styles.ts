import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F4FF',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        width: 'auto',
        height: 'auto'
    },
    logoTopo: {
        width: '30%',
        height: '15%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    txtBemVindo: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 20,
        marginTop: 30
    },
    txtAcompanhe: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 24
    },
    txtInsira: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 15,
        marginTop: 30,
        color: '#2F7DCA',
        marginBottom: 5
    },
    input: {
        backgroundColor: '#F7F8F9',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 5,
        height: 40,
        width: width * 0.8,
        fontFamily: 'Urbanist',
        fontSize: 18,
        fontWeight: 500,
        paddingLeft: 10,
        marginBottom: 12
    },
    viewBaixoSenha: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.8,
    },
    sectionCheck: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        backgroundColor: '#000',
        borderRadius: 5
    },
    txtCheck: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 15,
        marginLeft: 6
    }
})