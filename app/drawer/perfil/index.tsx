import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.login}>
      <Text style={GlobalStyles.tituloLogin}>Perfil</Text>
      <Image style={GlobalStyles.drawerUserImg} source={require('@/assets/user.jpg')}/>
    </View>
  )
}

export default ScreenProductos