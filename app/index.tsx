import { Link } from "expo-router";
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'

/*
export default function Index() {
  return <Redirect href="./drawer" />;
}
*/

const Login = () => {
  return (
    <View style={GlobalStyles.login}>
      <Text style={GlobalStyles.subtituloLogin}>Inicia sesión para continuar</Text>
      <Text style={GlobalStyles.tituloLogin}>PetConnect</Text>

      <View style={GlobalStyles.contenidoLogin}>
      <Text style={GlobalStyles.textoGrandeLogin}>Accede al refugio</Text>
        <Link style={GlobalStyles.textoLogin} href="./drawer">pagina principal</Link>
        <Link style={GlobalStyles.textoLogin} href="./registro">Registro</Link>
      </View>
    </View>
  )
}

export default Login