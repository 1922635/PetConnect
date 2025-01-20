import { Link } from "expo-router";
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from "react-native-gesture-handler";
import { Boton1 } from '../components/boton1';

const Login = () => {
  return (
    <View style={GlobalStyles.login}>
      <Text style={GlobalStyles.subtituloLogin}>Bienvenido a</Text>
      <Text style={GlobalStyles.tituloLogin}>PetConnect</Text>

      <View style={GlobalStyles.contenidoLogin}>
        <Text style={GlobalStyles.textoGrandeLogin}>Accede al refugio</Text>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Usuario"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Contraseña"></TextInput>
        <Boton1 label='Acceder' link={'./drawer'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
        <Boton1 label='Registrate' link={'./registro'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
      </View>
    </View>
  )
}

export default Login