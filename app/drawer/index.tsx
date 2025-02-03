import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Boton2 } from '@/components/boton2';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenPrincipal = () => {
  return (
    <ScrollView 
      contentContainerStyle={GlobalStyles.login}>

      <TextInput style={GlobalStyles.buscador} placeholder={'Buscar...'}></TextInput>
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
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/refugio' imagen={require('@/assets/images/adoptMe.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Refugio de patitas</Text>
        </View>
        <View style={GlobalStyles.viewBoton}>
          <Boton2 estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/marcha' imagen={require('@/assets/images/lupa.png')} estiloImagen={GlobalStyles.ImagenesInicio}></Boton2>
          <Text style={GlobalStyles.descImagenesInicio}>Sobre PetConnect</Text>
        </View>
      </View>

      <Text style={GlobalStyles.textoProtectoras}>Protectoras en colaboración</Text>
      <View style={GlobalStyles.viewProtectoras}>
        <Image style={GlobalStyles.ImagenesProtectoras} source={require('@/assets/images/protectora1.png')}></Image>
        <Image style={GlobalStyles.ImagenesProtectoras} source={require('@/assets/images/protectora2.png')}></Image>
      </View>
      
    </ScrollView>
  )
}

export default ScreenPrincipal
