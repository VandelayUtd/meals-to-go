import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {

  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
