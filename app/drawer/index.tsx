import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Link } from "expo-router";

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.login}>
      <Text>Pantalla 1</Text>
      <Text>(Habrá que hacer el login y el registro antes o algo pero bueno, vamos tirando por aquí)</Text>
      <Link href="./">Login</Link>
    </View>
  )
}

export default ScreenPrincipal