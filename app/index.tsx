import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from "react-native-gesture-handler";
import { Boton1 } from '../components/boton1';
import { ScrollView } from 'react-native-gesture-handler';

const Login = () => {
  return (
    <ScrollView 
      contentContainerStyle={GlobalStyles.login}>
      <Image style={GlobalStyles.logo} source={require('@/assets/images/logo 2.png')}></Image>
      <Text style={GlobalStyles.subtituloLogin}>Bienvenido a</Text>
      <Text style={GlobalStyles.tituloLogin}>PetConnect</Text>

      <View style={GlobalStyles.contenidoLogin}>
        <Image style={GlobalStyles.fotoMascotasLogin} source={require('@/assets/images/Pets.png')}></Image>
        <Image style={GlobalStyles.huellaIzquierda} source={require('@/assets/images/huella naranja.png')}></Image>
        <Text style={GlobalStyles.textoGrandeLogin}>Accede al refugio</Text>
        <Image style={GlobalStyles.huellaDerecha} source={require('@/assets/images/huella naranja.png')}></Image>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Usuario"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Contraseña"></TextInput>
        <View style={GlobalStyles.displayBotones}>
          <Boton1 label='Acceder' link={'./drawer'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
          <Boton1 label='Registrate' link={'./registro'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login
