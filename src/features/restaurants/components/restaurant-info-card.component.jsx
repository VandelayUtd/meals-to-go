import React from 'react';
import styled from 'styled-components/native';
import { Text, Image, View } from 'react-native';
import { Card } from 'react-native-paper'


const Title = styled.Text`
    padding: 16px;
`;

const RestaurantCard = styled(Card)`
        background-color: white;
        elevation: 5;
`;

const RestaurantCardCover = styled(Card.Cover)`
        padding: 20px;
        background-color: white;
`;


export const RestaurantInfoCard = ({ restaurant = {} }) => {

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
        <RestaurantCard>  
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Title>{name}</Title>
        </RestaurantCard>
    )
}
