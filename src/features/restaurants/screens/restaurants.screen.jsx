import React from 'react'; 
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native'

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
    padding: 16px;
`;

const RestaurauntListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: #0000FF;
`;

export const RestaurantsScreen = () => (
    <SafeArea >
        <SearchContainer>
            <Searchbar 
                placeholder='Search'
            />
        </SearchContainer>
        <RestaurauntListContainer>
            <RestaurantInfoCard />
        </RestaurauntListContainer>
    </SafeArea>
)

