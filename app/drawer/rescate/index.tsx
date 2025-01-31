import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import MapView from 'react-native-maps'
import { TextInput } from 'react-native-gesture-handler'
import { Boton1 } from '@/components/boton1'

const ScreenConfiguracion = () => {
  return (
    <View style={GlobalStyles.login}>
    
      <Text style={GlobalStyles.rescateTexto}>Este mapa conecta a quienes necesitan ayuda con quienes están dispuestos a ofrecerla.</Text>
       
      <MapView
        style={GlobalStyles.map}
        initialRegion={{
          latitude: 37.60562179238231,
          longitude: -0.9905710197060387,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />

      <TextInput style={GlobalStyles.textInputMapa} placeholder='Describa su situación aquí...'></TextInput>
      <Boton1 label='Enviar' estilo1={GlobalStyles.botonMapa} estilo2={GlobalStyles.botonPulsadoMapa} link='./'></Boton1>
    </View>
  )
}

export default ScreenConfiguracion