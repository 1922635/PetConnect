import { StyleSheet } from "react-native"
import { Colores } from "./Colores"

export const GlobalStyles = StyleSheet.create({
    login: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colores.darkBlue,
    },

    logo:
    {
        top: '2%',
        left: '40%',
        width: 50,
        height: 50
    },

    registro: {
        alignItems: 'center',
        backgroundColor: Colores.white,
    },

    tituloLogin: {
        fontSize: 50,
        color: Colores.white, 
        fontFamily: 'Wendy'
    },

    tituloRegistro:
    {
        fontSize: 50,
        color: Colores.darkBlue, 
        fontFamily: 'Wendy',
    },
    
    subtituloLogin: {
        fontSize: 18,
        color: Colores.white,
        marginTop: 28,
        fontFamily: 'PoppinsBold'
    },

    subtituloRegistro: {
        fontSize: 18,
        color: Colores.darkBlue,
        marginTop: 28,
        fontFamily: 'PoppinsBold'
    },

    contenidoLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colores.white,
        borderRadius: 35,
        marginTop: 80,
        width: '100%'
    },

    contenidoRegistro: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colores.black,
        borderRadius: 35,
        marginTop: 80,
        width: '100%'
    },

    fotoMascotasLogin: {
        marginTop: -150,
        width: 250,
        height: 250,
    },

    fotoMascotasRegistro: {
        marginTop: -80,
        marginBottom: -132,
        width: 250,
        height: 250,
    },

    huellaIzquierda:
    {
        right: '40%',
        transform: [{rotate: '-45deg'}],
        width: 40,
        height: 40
    },

    huellaDerecha:
    {
        left: '40%',
        transform: [{rotate: '45deg'}],
        width: 40,
        height: 40
    },

    textoGrandeLogin: {
        fontSize: 30,
        color: Colores.darkBlue,
        fontFamily: 'PoppinsBold',
        margin: -10
    },

    textoGrandeRegistro: {
        fontSize: 30,
        color: Colores.white,
        fontFamily: 'PoppinsBold',
        margin: -10
    },

    textInputLogin: {
        width: '75%',
        backgroundColor: Colores.orange,
        borderRadius: 25,
        margin: 5,
        fontFamily: 'Poppins',
        fontSize: 18
    },

    displayBotones:
    {
        flexDirection: 'row',
    },

    botonLogin: {
        backgroundColor: Colores.orange,
        width: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        margin: 10,
        fontFamily: 'Poppins',
        marginHorizontal: 35
    },

    botonPulsadoLogin: {
        backgroundColor: Colores.orange,
        width: 100,
        textAlign: 'center',
        opacity: 0.45,
        padding: 10,
        borderRadius: 15,
        margin: 10,
        fontFamily: 'Poppins'
    },

    drawerUserContainer: {
        backgroundColor: Colores.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginBottom: 30,
        height: 140,
        borderRadius: 10,

    },

    drawerUserImg: {
        width: 100, 
        height: 100, 
        alignSelf:'center', 
        borderRadius: 50
    },

    headerStyleClaro: {
        backgroundColor: Colores.white
    },

    headerStyleOscuro: {
        backgroundColor: Colores.darkBlue
    },

    headerTitleStylePrincipal: {
        fontSize: 50,
        color: Colores.white, 
        fontFamily: 'Wendy'
    },

    headerTitleStyleClaro: {
        fontSize: 30,
        color: Colores.white, 
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },

    headerTitleStyleOscuro: {
        fontSize: 25,
        color: Colores.darkBlue, 
        fontFamily: 'Poppins'
    },

    botonPrincipal: {
        backgroundColor: Colores.orange,
        width: 100,
        height: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        marginVertical: 10,
        marginHorizontal: 6,
        fontFamily: 'Poppins',
    }, 

    botonPrincipalPulsado: {
        backgroundColor: Colores.orange,
        width: 100,
        height: 100,
        textAlign: 'center',
        opacity: 0.45,
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 6,
        fontFamily: 'Poppins'
    },

    secciones: {
        marginHorizontal: 12,
        marginVertical: 20,
        paddingTop: 5,
        paddingBottom: 20,
        borderRadius: 25,
        backgroundColor: Colores.white,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tituloSecciones: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 45,
        color: Colores.orange,
        marginHorizontal: 20,
    },

    huellaIzquierdaSecciones: {
        transform: [{rotate: '-45deg'}],
        width: 40,
        height: 40
    },

    huellaDerechaSecciones: {
        transform: [{rotate: '45deg'}],
        width: 40,
        height: 40
    },

    viewBoton: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    ImagenesInicio: {
        width: 100,
        height: 100,
    },

    descImagenesInicio: {
        fontFamily: 'Poppins',
        color: Colores.darkBlue,
        fontSize: 18,
        fontWeight: 'bold',
        width: 100,
        textAlign: 'center'
    },

    textoProtectoras: {
        fontFamily: 'Poppins',
        color: Colores.white,
        fontSize: 24,
        fontWeight: 'bold',
    },

    viewProtectoras: {
        padding: 15,
        flexDirection: 'row',
    },

    ImagenesProtectoras: {
        width: 100,
        height: 100,
        marginHorizontal: 15,
    },

    rescateTexto:
    {
        fontFamily: 'Poppins',
        color: Colores.white,
        fontSize: 21,
        textAlign: 'justify',
        margin: 18,
    },

    map: {
        width: 300,
        height: 300,
    }
})