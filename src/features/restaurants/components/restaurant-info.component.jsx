import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'


export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Commadore', 
        icon, 
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ], 
        address = 'street name', 
        isOpenNow = true, 
        rating = 4, 
        isClosedtemp 
    } = restaurant
    return (    
        <Card elevation={5} style={styles.card}>  
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: { backgroundColor: 'white'},
    cover: {
        padding: 20,
        backgroundColor: 'white'

    },
    title: {
        padding: 16
    }
})