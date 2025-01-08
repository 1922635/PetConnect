import { Link } from "expo-router";
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

/*
export default function Index() {
  return <Redirect href="./drawer" />;
}
*/

const Registro = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style={GlobalStyles.titulo}>Super registro pro</Text>
      <Link href="./">login</Link>
    </View>
  )
}

export default Registro