import { View, Text, Image } from 'react-native'
import React from 'react'
import Registro from '@/app/registro'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from 'react-native-gesture-handler'

const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.registro}>

      <View style={GlobalStyles.viewDarkBlue}>
        <Text style={GlobalStyles.textoAdoptar2}>Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y se parte del cambio!.</Text>
        <Image source={require('@/assets/images/perritos y gatitos.png')} style={GlobalStyles.perritosYgatitos}></Image>
      </View>

      <View style={GlobalStyles.secciones2}>
        <View style={GlobalStyles.viewPluto}>
            <Text style={GlobalStyles.textDiscusion}>Guias de Alimentación de B.A.R.F para tu animal</Text>
        </View>
      </View>

            <View style={GlobalStyles.secciones2}>
        <View style={GlobalStyles.viewPluto}>
            <Text style={GlobalStyles.textDiscusion}>Consejos para sobrellevar la ola de calor con tu mascota</Text>
        </View>
      </View>
      <View style={GlobalStyles.secciones2}>
        <View style={GlobalStyles.viewPluto}>
            <Text style={GlobalStyles.textDiscusion}>COMO EMPEZAR A ADIESTRAR TU MASCOTA.</Text>
        </View>
      </View>

    </View>
  )
}

export default ScreenProductos