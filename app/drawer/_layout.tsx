import { Drawer} from 'expo-router/drawer';
import { Ionicons} from '@expo/vector-icons'
import React from 'react';
import CustomDrawer from '@/components/CustomDrawer';
import { Colores } from '@/theme/Colores';
import { GlobalStyles } from '@/theme/GlobalStyles';

const LayoutDrawer = () => {
  return (
    <Drawer 
        drawerContent={CustomDrawer}
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.4)',
            drawerInactiveTintColor: Colores.black,
            drawerActiveBackgroundColor: Colores.darkBlue,
            drawerActiveTintColor: Colores.white,
            drawerItemStyle: {
                borderRadius: 10
            }
        }}
    >
    <Drawer.Screen
      name="index" 
      options={{
        drawerLabel: 'Inicio',
        title: 'PetConnect',
        headerTitleStyle: GlobalStyles.headerTitleStyleClaro,
        headerStyle: GlobalStyles.headerStyleOscuro,
        drawerIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="perfil/index"
      options={{
        drawerLabel: 'Perfil',
        title: 'Perfil',
        drawerIcon: ({size, color}) => <Ionicons name="person" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="configuracion/index" 
      options={{
        drawerLabel: 'Ajustes',
        title: 'Pantalla configuracion',
        drawerIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="favoritos/index" 
      options={{
        drawerLabel: 'Favoritos',
        title: 'Favoritos',
        drawerIcon: ({size, color}) => <Ionicons name="heart" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="mensajes/index" 
      options={{
        drawerLabel: 'Mensajes',
        title: 'Mensajes',
        drawerIcon: ({size, color}) => <Ionicons name="mail" size={size} color={color}/>
      }}
    />
  </Drawer>
  )
}

export default LayoutDrawer