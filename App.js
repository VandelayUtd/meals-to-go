import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'; 
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
// import { SafeArea } from "./src/components/utility/safe-area.component";


const Tab = createBottomTabNavigator();

// function MyStacks() { 
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name='Home' component={HomeScreen} />
//     </Tab.Navigator>
//   )
// }

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.screen name='Restaurants' component={RestaurantScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
