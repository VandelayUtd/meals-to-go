import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

export default function App() {

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={ styles.searchBar }>
          <Text>Search</Text>
        </View>
        <View style={ styles.listView }>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

  searchBar: {
    padding: 16,
    backgroundColor: '#008000', 
    marginTop: StatusBar.currentHeight,
  },

  listView: { 
    flex: 1,
    padding: 16,
    backgroundColor: '#0000FF',
  },

});
