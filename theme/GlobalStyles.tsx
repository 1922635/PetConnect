import { StyleSheet } from "react-native"
import { Colores } from "./Colores"

export const GlobalStyles = StyleSheet.create({
    login: {
        alignItems: 'center',
        backgroundColor: Colores.darkBlue,
        paddingVertical: 5,
        height: 700
    },

    plutofondo:{
        backgroundColor: Colores.orange,
        paddingVertical: 5,
        alignItems: 'center',
        height: 680
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
        width: '100%',
        marginBottom: 90
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
        borderRadius: 25,
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
        fontSize: 30,
        color: Colores.darkBlue, 
        fontFamily: 'Poppins',
        fontWeight: 'bold',
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
        borderRadius: 25,
        marginVertical: 10,
        marginHorizontal: 6,
        fontFamily: 'Poppins'
    },

    secciones: {
        marginHorizontal: 12,
        marginVertical: 0,
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
        fontSize: 40,
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
        position: 'absolute',
    },

    descImagenesInicio: {
        fontFamily: 'Poppins',
        color: Colores.darkBlue,
        fontSize: 16,
        fontWeight: 'bold',
        width: 100,
        textAlign: 'center',
        marginTop: -5
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
    },

    textInputMapa: {
        width: '85%',
        height: 120,
        backgroundColor: Colores.white,
        borderRadius: 25,
        marginTop: 15,
        fontFamily: 'Poppins',
        fontSize: 18,
        textAlignVertical: 'top',
    },

    botonMapa: {
        backgroundColor: Colores.white,
        width: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        margin: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 17,
        color: Colores.darkBlue,
        left: 100,
    },

    botonPulsadoMapa: {
        backgroundColor: Colores.white,
        opacity: 0.4,
        width: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        margin: 16,
        fontFamily: 'Poppins',
        left: 100,
    },

    buscador: {
        margin: 15,
        borderColor: Colores.darkBlue,
        borderWidth: 3,
        borderRadius: 25,
        padding: 20,
        fontFamily: 'Poppins',
        color: Colores.darkBlue,
        width: '95%',
        backgroundColor: Colores.white
    },

    viewDarkBlue: {
        backgroundColor: Colores.darkBlue,
        borderRadius: 25,
        margin: 10,
        width: '95%'
    },

    textoAdoptar: {
        fontFamily: 'Poppins',
        color: Colores.white,
        fontSize: 18,
        textAlign: 'justify',
        margin: 24,
        
    },

    perritosYgatitos: {
        width: '85%',
        height: 40,
        left: 25,
        marginTop: -35
    },

    textoNaranja: {
        fontFamily: 'Poppins',
        color: Colores.orange,
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 5,
        marginTop: -30,
        marginHorizontal: 25,
    },

    viewNaranja: {
        backgroundColor: Colores.orange,
        borderRadius: 25,
        marginTop: 75,
        marginHorizontal: 5,
        padding: 15,
        width: 112,
        transform: [{ translateY: -50 }],
        maxHeight: '90%'
    },

    imagenesCategorías: {
        width: 60,
        height: 60,
        transform: [{ translateX: 7 }],

    },

    viewPluto: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Colores.orange,
        borderRadius: 25,
        padding: 10
    },

    pluto: {
        width: 130,
        height: 100,    
        borderRadius: 20,
        //Necesitamos que se estire horizontalmente para que se quede con un poco de margen con el cuadro blanco
    },

    plutoGrande: {
        width: '91%',
        height: 280,    
        borderRadius: 15,
        transform: [{ translateX: 14 }, { translateY: 15 }],
        //Necesitamos que se estire horizontalmente para que se quede con un poco de margen con el cuadro blanco
    },

    plutoBlanco:{
        marginTop: 20,
        width:'90%',
        backgroundColor: Colores.white,
        borderRadius: 20,
        margin: 5,
    },
    
    plutoBlanco2:{
        marginTop: 20,
        width:'90%',
        height: 100,
        backgroundColor: Colores.white,
        borderRadius: 20
    },

    lineasPluto:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 22,
        transform:  [{ translateX: 14 }, { translateY: 17 }],
        color: Colores.darkBlue
    },

    lineasPluto2:{
        fontFamily: 'Roboto',
        fontWeight: 'regular',
        fontSize: 11,
        transform:  [{ translateX: 14 }, { translateY: 17 }],
        color: Colores.darkBlue
    },

    lineasPlutoHogar:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        transform:  [{ translateX: 56 }, { translateY: 30 }],
        color: Colores.darkBlue
    },

    Ana:{
        borderRadius: 15,
        width: 50,
        height: 50,
        transform:  [{ translateX: 14 }, { translateY: 30 }],
    },

    lineasAna:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 22,
        transform:  [{ translateX: 70 }, { translateY: -25 }],
        color: Colores.darkBlue
    },

    lineasAna2:{
        fontFamily: 'Roboto',
        fontWeight: 'regular',
        fontSize: 11,
        transform:  [{ translateX: 70 }, { translateY: -30 }],
        color: Colores.darkBlue
    },

    lineasAna3:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        width: '94%',
        transform:  [{ translateX: 14 }, { translateY: -10 }],
        color: Colores.darkBlue,
        textAlign: 'justify'
    },

    viewBlanco: {
        backgroundColor: Colores.white,
        borderRadius: 30,
        marginHorizontal: 10,
        width: 142,
        height: 160,  
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoPluto: {
        color: Colores.darkBlue,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 14,
        transform:  [{ translateY: 0 }, { translateX: -38 }],
    },

    textoPluto2: {
        color: Colores.darkBlue,
        fontFamily: 'Poppins',
        fontWeight: 'regular',
        fontSize: 10,
        transform:  [{ translateY: -4 }, { translateX: -18 }],
    },

    textoAnimales: {
        color: Colores.white,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center',
        marginLeft: 5
    },

    textoAdoptar2: {
        fontFamily: 'Poppins',
        color: Colores.white,
        fontSize: 15,
        textAlign: 'justify',
        margin: 24,
        
    },

    textDiscusion:{
        fontFamily: 'Poppins',
        color: Colores.white,
        fontWeight: 'bold',
        padding: 10
    },

    secciones2: {
        marginHorizontal: 12,
        marginVertical: 0,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },

    discusionAzul: {
        fontFamily: 'Poppins',
        color: Colores.darkBlue,
        fontWeight: 'bold',
        fontSize: 20,
    },

    botonDiscusion: {
        backgroundColor: Colores.darkBlue,
        width: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        margin: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 17,
        color: Colores.white,
        left: 120,
        marginTop: 40,
    },

    botonPulsadoDiscusion: {
        backgroundColor: Colores.darkBlue,
        opacity: 0.4,
        width: 100,
        textAlign: 'center',
        padding: 10,
        borderRadius: 25,
        margin: 16,
        fontFamily: 'Poppins',
        left: 120,
        marginTop: 40,
    },

    volver: {
        right: '34%',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: Colores.darkBlue,
        backgroundColor: Colores.white,
        borderRadius: 14,
        padding: 5,
        marginTop: 3,
        marginBottom: -10,
        fontSize: 20,
    }
})