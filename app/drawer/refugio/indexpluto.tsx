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
        </View>


    
    
    </ScrollView>
)

}

export default ScreenProductos