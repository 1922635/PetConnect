import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot, SplashScreen } from "expo-router";
import {useEffect} from "react";
import { useFonts }  from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    Wendy: require('../assets/fonts/WendyOne-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
