import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Link } from "expo-router";
import { Boton1 } from '@/components/boton1';

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.login}>
      <Boton1 label='Patitas al rescate' estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/rescate'></Boton1>
      <Boton1 label='Patitas en marcha' estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/marcha'></Boton1>
      <Boton1 label='Refugio de patitas' estilo1={GlobalStyles.botonPrincipal} estilo2={GlobalStyles.botonPrincipalPulsado} link='./drawer/refugio'></Boton1>

      <Text>Pantalla 1</Text>
      <Text>(Habrá que hacer el login y el registro antes o algo pero bueno, vamos tirando por aquí)</Text>
      <Link href="./">Login</Link>
    </View>
  )
}

export default ScreenPrincipal