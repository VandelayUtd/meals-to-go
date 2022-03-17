import React from 'react'; 
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => (
<SafeAreaView style={ styles.container }>
    <View style={ styles.searchBar }>
        <Searchbar 
            placeholder='Search'
        />
    </View>
    <View style={ styles.listView }>
        <RestaurantInfo />
    </View>
    </SafeAreaView>
)



const styles = StyleSheet.create({

    container: {
      flex: 1
    },
  
    searchBar: {
      marginTop: StatusBar.currentHeight,
    },
  
    listView: { 
      flex: 1,
      padding: 16,
      backgroundColor: '#0000FF',
    },
  
  });
  