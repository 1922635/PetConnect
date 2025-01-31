import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Link } from "expo-router";
import { Boton2 } from '@/components/boton2';
import { SearchBar } from 'react-native-screens';

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.login}>

      <View style={GlobalStyles.secciones}>
        <Image style={GlobalStyles.huellaIzquierdaSecciones} source={require('@/assets/images/huella naranja.png')}></Image>
        <Text style={GlobalStyles.tituloSecciones}>Secciones</Text>
        <Image style={GlobalStyles.huellaDerechaSecciones} source={require('@/assets/images/huella naranja.png')}></Image>

        <View style={GlobalStyles.viewBoton}>
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/rescate' imagen={require('@/assets/images/patitasAlRescate.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Patitas al rescate</Text>
        </View>
        <View style={GlobalStyles.viewBoton}>
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/marcha' imagen={require('@/assets/images/patitasEnMarcha.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Patitas en marcha</Text>
        </View>
        <View style={GlobalStyles.viewBoton}>
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/marcha' imagen={require('@/assets/images/comunidadAnimal.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Comunidad animal</Text>
        </View>
        <View style={GlobalStyles.viewBoton}>
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/marcha' imagen={require('@/assets/images/adoptMe.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Refugio de patitas</Text>
        </View>
        <View style={GlobalStyles.viewBoton}>
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/marcha' imagen={require('@/assets/images/lupa.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Sobre PetConnect</Text>
        </View>

      </View>
      <Text>Pantalla 1</Text>
      <Text>(Habrá que hacer el login y el registro antes o algo pero bueno, vamos tirando por aquí)</Text>
      <Link href="./">Login</Link>
    </View>
  )
}

export default ScreenPrincipal