import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colores } from '@/theme/Colores'

const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={GlobalStyles.drawerUserContainer}>
        <Image style={GlobalStyles.drawerUserImg}
                source={require('../assets/user.jpg')}
        />
      </View>

      <DrawerItemList {...props}/>
      <DrawerItem 
        label='Log-out' 
        onPress={() => router.push('../../')}
        icon={({size, color}) => <Ionicons name='log-out' size={size} color={color}/>}
        inactiveTintColor= {Colores.black}
        />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer