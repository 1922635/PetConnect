import { View, Text, Image } from 'react-native'
import React from 'react'
import Registro from '@/app/registro'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from 'react-native-gesture-handler'

const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.registro}>
      <TextInput style={GlobalStyles.buscador} placeholder={'Buscar...'}></TextInput>

      <View style={GlobalStyles.viewDarkBlue}>
        <Text style={GlobalStyles.textoAdoptar}>Adoptar es un compromiso para toda la vida, piensalo bien antes de dar el paso. Si no puedes cuidarlo hoy, mañana y siempre, no adoptes.</Text>
        <Image source={require('@/assets/images/perritos y gatitos.png')} style={GlobalStyles.perritosYgatitos}></Image>
      </View>

      <View style={GlobalStyles.secciones}>
        <Text style={GlobalStyles.textoNaranja}>Categorías</Text>
        <Text style={GlobalStyles.textoNaranja}>Ver todo</Text>
      </View>

    </View>
  )
}

export default ScreenProductos