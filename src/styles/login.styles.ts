import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F4FF',
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: 'auto'
    },
    logoTopo: {
        width: '25%',
        height: '15%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50,
    },
    txtBemVindo: {
        fontFamily: 'Urbanist',
        fontWeight: 700,
        fontSize: 20,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30
    },
    txtAcompanhe: {
        fontFamily: 'Urbanist',
        fontWeight: 700,
        fontSize: 23,
        marginLeft: 30,
        marginRight: 30
    },
    txtInsira: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 16,
        marginTop: 40,
        color: '#2F7DCA',
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30
    },
    input: {
        backgroundColor: '#F7F8F9',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 5,
        height: 40,
        width: 'auto',
        fontFamily: 'Urbanist',
        fontSize: 18,
        fontWeight: 500,
        paddingLeft: 10,
        marginBottom: 12,
        marginLeft: 30,
        marginRight: 30
    },
    viewBaixoSenha: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        marginLeft: 30,
        marginRight: 30
    },
    sectionCheck: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        backgroundColor: '#E0F4FF',
        borderRadius: 5
    },
    txtCheck: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 16,
        marginLeft: 6
    },
    txtEsqueci: {
        fontFamily: 'Urbanist',
        fontWeight: 600,
        fontSize: 16,
        marginLeft: 6,
        color: '#2F7DCA'
    }
})