import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from "react-native-gesture-handler";
import { Boton1 } from '../../components/boton1';
import { ScrollView } from 'react-native-gesture-handler';

const Registro = () => {
  return (
    <ScrollView 
      contentContainerStyle={GlobalStyles.registro}>
      <Image style={GlobalStyles.logo} source={require('@/assets/images/logo 2.png')}></Image>
      <Text style={GlobalStyles.subtituloRegistro}>Bienvenido a</Text>
      <Text style={GlobalStyles.tituloRegistro}>PetConnect</Text>

      <Image style={GlobalStyles.fotoMascotasRegistro} source={require('@/assets/images/Pets.png')}></Image>
      <View style={GlobalStyles.contenidoRegistro}>
        <Image style={GlobalStyles.huellaIzquierda} source={require('@/assets/images/huellaBlanca.png')}></Image>
        <Text style={GlobalStyles.textoGrandeRegistro}>Hazte miembro</Text>
        <Image style={GlobalStyles.huellaDerecha} source={require('@/assets/images/huellaBlanca.png')}></Image>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Nombre"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Email"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Contraseña"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="RepetirContraseña"></TextInput>
        <View style={GlobalStyles.displayBotones}>
          <Boton1 label='Registrate' link={'./drawer'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
          <Boton1 label='Cancelar' link={'../'} estilo1={GlobalStyles.botonLogin} estilo2={GlobalStyles.botonPulsadoLogin}></Boton1>
        </View>
        
      </View>
    </ScrollView>
  )
}

export default Registro
