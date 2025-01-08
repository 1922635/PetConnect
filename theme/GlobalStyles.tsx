import { StyleSheet } from "react-native"
import { Colores } from "./Colores"

export const GlobalStyles = StyleSheet.create({
    login: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colores.darkBlue,
    },

    tituloLogin: {
        fontSize: 50,
        color: Colores.white,
        fontWeight: 'bold'
    },
    
    subtituloLogin: {
        fontSize: 18,
        color: Colores.white,
        marginTop: 50,
    },

    contenidoLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colores.white,
        borderRadius: 10,
        margin: 100,
        width: '100%'
    },

    textoGrandeLogin: {
        fontSize: 35,
        color: Colores.darkBlue,
        fontWeight: 'bold'
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