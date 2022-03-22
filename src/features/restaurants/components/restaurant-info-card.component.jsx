import React from 'react';
import styled from 'styled-components/native';
import { Text, Image, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Spacer } from '../../../components/spacer/spacer.component'
import { Card } from 'react-native-paper';
import { sizes } from '../../../infrastructure/theme/sizes';
import star from '../../../../assets/star'
import open from '../../../../assets/open'


const Title = styled.Text`
    color: ${props => props.theme.colors.ui.primary};
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.title};
`;

const Info = styled.View`
    padding: ${props => props.theme.space[3]};
`

const Section = styled.View`
    flex-direction: row;
`

const SectionEnd = styled.View`
    flex: 1;
    flex-shrink: 1;
    flex-direction: row;
    justifyContent: flex-end;
    align-items: center;
`

const Rating = styled.View`
    flex-direction: row;
    padding: ${props => props.theme.space[2]};
`

const Address = styled.Text`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption};
    padding: ${props => props.theme.space[2]};
`

const RestaurantCard = styled(Card)`
        background-color: ${props => props.theme.colors.bg.primary};
        elevation: 5;
`;

const RestaurantCardCover = styled(Card.Cover)`
        padding: ${props => props.theme.space[3]};
        background-color: ${props => props.theme.colors.bg.primary};
`;


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Commadore', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ], 
        address = 'street name', 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemp = true 
    } = restaurant

    const ratingArray = Array.from( new Array(Math.floor(rating)))

    return (    
        <RestaurantCard>  
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Info >
                <Title>{name}</Title>
                <Section>
                    <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))
                    }
                    </Rating>
                    <SectionEnd>
                        {isClosedTemp &&
                            <Text 
                                variant='label'
                                adjustsFontSizeToFit={true} 
                                style={{
                                    color: 'red', textAlign: 'center',  display: 'flex',
                                }}
                                >
                                CLOSED TEMPORARILY
                            </Text>
                        }
                        <Spacer position='left' size='large'  >
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position='left' size='large'>
                            <Image style={{ width: 15, height:15 }} source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
