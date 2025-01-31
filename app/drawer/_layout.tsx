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
        headerTitleStyle: GlobalStyles.headerTitleStylePrincipal,
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
      name="rescate/index" 
      options={{
        drawerLabel: 'Patitas al rescate',
        title: 'Patitas al rescate',
        headerTitleStyle: GlobalStyles.headerTitleStyleClaro,
        headerStyle: GlobalStyles.headerStyleOscuro,
        drawerIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="marcha/index" 
      options={{
        drawerLabel: 'Patitas en marcha',
        title: 'Patitas en marcha',
        drawerIcon: ({size, color}) => <Ionicons name="heart" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="refugio/index" 
      options={{
        drawerLabel: 'Refugio de patitas',
        title: 'Refugio de patitas',
        headerTitleStyle: GlobalStyles.headerTitleStyleOscuro,
        headerStyle: GlobalStyles.headerStyleClaro,
        drawerIcon: ({size, color}) => <Ionicons name="mail" size={size} color={color}/>
      }}
    />
  </Drawer>
  )
}

export default LayoutDrawer