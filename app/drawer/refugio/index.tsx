import { View, Text, Image } from 'react-native';
import React from 'react';
import Registro from '@/app/registro';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { TextInput } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { Boton2 } from '@/components/boton2';

const ScreenProductos = () => {
  return (
    <ScrollView 
      contentContainerStyle={GlobalStyles.registro}>
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
          <Text style={GlobalStyles.textoAnimales}>GATOS</Text>
        </View>
        <View style={GlobalStyles.viewNaranja}>
          <Image source={require('@/assets/images/perrito.png')} style={GlobalStyles.imagenesCategorías}></Image>
          <Text style={GlobalStyles.textoAnimales}>PERROS</Text>
        </View>
        <View style={GlobalStyles.viewNaranja}>
          <Image source={require('@/assets/images/conejito.png')} style={GlobalStyles.imagenesCategorías}></Image>
          <Text style={GlobalStyles.textoAnimales}>CONEJOS</Text>
        </View>


        <View style={GlobalStyles.viewPluto}>
          <View style={GlobalStyles.viewBlanco}>
            <Boton2 estilo2={GlobalStyles.botonPrincipalPulsado} link='./refugio/indexpluto' imagen={require('@/assets/images/Pluto.png')} estiloImagen={GlobalStyles.pluto}></Boton2>
            <Text style={GlobalStyles.textoPluto}>Pluto</Text>
          </View>
          <View style={GlobalStyles.viewBlanco}>
            <Image source={require('@/assets/images/Pluto.png')} style={GlobalStyles.pluto}></Image>
            <Text style={GlobalStyles.textoPluto}>Pluto</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default ScreenProductos
