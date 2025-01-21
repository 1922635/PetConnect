import { StyleSheet } from "react-native"
import { Colores } from "./Colores"
import { opacity } from "react-native-reanimated/lib/typescript/Colors"

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
        fontFamily: 'Wendy'
    },
    
    subtituloLogin: {
        fontSize: 18,
        color: Colores.white,
        marginTop: 28,
        fontWeight: 'bold'
    },

    subtituloRegistro: {
        fontSize: 18,
        color: Colores.darkBlue,
        marginTop: 28,
        fontWeight: 'bold'
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
        width: 45,
        height: 45
    },

    huellaDerecha:
    {
        left: '40%',
        transform: [{rotate: '45deg'}],
        width: 45,
        height: 45
    },

    textoGrandeLogin: {
        fontSize: 35,
        color: Colores.darkBlue,
        fontWeight: 'bold'
    },

    textoGrandeRegistro: {
        fontSize: 35,
        color: Colores.white,
        fontWeight: 'bold'
    },

    textInputLogin: {
        width: '75%',
        backgroundColor: Colores.orange,
        borderRadius: 25,
        margin: 5
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
    },

    botonPulsadoLogin: {
        backgroundColor: Colores.orange,
        width: 100,
        textAlign: 'center',
        opacity: 0.45,
        padding: 10,
        borderRadius: 15,
        margin: 10,
    },

    textoLogin: {
        fontSize: 18,
        color: Colores.darkBlue,
    },

    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 22
    },

    drawerUserContainer: {
        backgroundColor: 'indigo',
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
    }
})