import { Link } from "expo-router";
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from "react-native-gesture-handler";
import { Boton1 } from '../../components/boton1';

const Registro = () => {
  return (
    <View style={GlobalStyles.registro}>
      <Text style={GlobalStyles.subtituloRegistro}>Bienvenido a</Text>
      <Text style={GlobalStyles.tituloRegistro}>PetConnect</Text>

      <View style={GlobalStyles.contenidoRegistro}>
        <Text style={GlobalStyles.textoGrandeRegistro}>Accede al refugio</Text>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Nombre"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Email"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Contraseña"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="RepetirContraseña"></TextInput>
        <Boton1 label='Registrate' link={'./drawer'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
        <Boton1 label='Cancelar' link={'../'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
      </View>
    </View>
  )
}

export default Registro