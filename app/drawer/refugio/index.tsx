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

        <View style={GlobalStyles.viewNaranja}>
          <Image source={require('@/assets/images/gatito.png')} style={GlobalStyles.imagenesCategorías}></Image>
        </View>
        <View style={GlobalStyles.viewNaranja}>
          <Image source={require('@/assets/images/perrito.png')} style={GlobalStyles.imagenesCategorías}></Image>
        </View>
        <View style={GlobalStyles.viewNaranja}>
          <Image source={require('@/assets/images/conejito.png')} style={GlobalStyles.imagenesCategorías}></Image>
        </View>


        <View style={GlobalStyles.viewPluto}>
          <View style={GlobalStyles.viewBlanco}>
            <Image source={require('@/assets/images/Pluto.png')} style={GlobalStyles.pluto}></Image>
            <Text style={GlobalStyles.textoPluto}>Pluto</Text>
          </View>
          <View style={GlobalStyles.viewBlanco}>
            <Image source={require('@/assets/images/Pluto.png')} style={GlobalStyles.pluto}></Image>
            <Text style={GlobalStyles.textoPluto}>Pluto</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default ScreenProductos