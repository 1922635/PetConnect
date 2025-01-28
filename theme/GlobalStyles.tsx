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
        flex: 1,
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
        margin: 80,
        width: '100%'
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

    headerTitleStyleClaro: {
        fontSize: 50,
        color: Colores.white, 
        fontFamily: 'Wendy'
    },

    headerTitleStyleOscuro: {
        fontSize: 50,
        color: Colores.darkBlue, 
        fontFamily: 'Wendy'
    }

})