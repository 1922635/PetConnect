import { Link } from "expo-router";
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from "react-native-gesture-handler";

/*
export default function Index() {
  return <Redirect href="./drawer" />;
}
*/

const Login = () => {
  return (
    <View style={GlobalStyles.login}>
      <Text style={GlobalStyles.subtituloLogin}>Bienvenido a</Text>
      <Text style={GlobalStyles.tituloLogin}>PetConnect</Text>

      <View style={GlobalStyles.contenidoLogin}>
        <Text style={GlobalStyles.textoGrandeLogin}>Accede al refugio</Text>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Usuario"></TextInput>
        <TextInput style={GlobalStyles.textInputLogin} placeholder="Contraseña"></TextInput>
        <Link style={GlobalStyles.textoLogin} href="./drawer">pagina principal</Link>
        <Link style={GlobalStyles.textoLogin} href="./registro">Registro</Link>
      </View>
    </View>
  )
}

export default Login