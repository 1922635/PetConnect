import { View, Text, Image } from 'react-native';
import React from 'react';
import Registro from '@/app/registro';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { TextInput } from 'react-native-gesture-handler';
import { Boton1 } from '@/components/boton1';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenProductos = () => {
  return (
    <ScrollView 
      contentContainerStyle={GlobalStyles.plutofondo}>

      <View style={GlobalStyles.plutoBlanco}>
              <Image style={GlobalStyles.plutoGrande} source={require('@/assets/images/Pluto.png')}></Image>

              <Text style={GlobalStyles.lineasPluto}>Pluto ♂                     1,5 años</Text>
              <Text style={GlobalStyles.lineasPluto2}>Murcia                                                                  Bodeguero</Text>
              
              <View>
              <Image style={GlobalStyles.Ana} source={require('@/assets/images/ana.png')}></Image>
              <Text style={GlobalStyles.lineasAna}>Ana</Text>
              <Text style={GlobalStyles.lineasAna2}>PerrosAbandona2</Text>

              <Text style={GlobalStyles.lineasAna3}>Pluto entró de forma inesperada a una peluquería en la
que justo estaba uno de nuestros voluntarios, no llevaba
chip y nadie lo ha reclamado así que busca familia
definitiva!</Text>
              </View>
        </View>

        <View style={GlobalStyles.plutoBlanco2}>
        <Text style={GlobalStyles.lineasPlutoHogar}>DAME UN HOGAR</Text>


        </View>


    
    
    </ScrollView>
)

}

export default ScreenProductos