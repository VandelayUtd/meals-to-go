import styled from 'styled-components/native';
import { Card } from 'react-native-paper';


export const RestaurantCard = styled(Card)`
    background-color: ${props => props.theme.colors.bg.primary};
    elevation: 5;
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`;

export const Section = styled.View`
flex-direction: row;
`;

export const Info = styled.View`
padding: ${props => props.theme.space[3]};
`;


export const SectionEnd = styled.View`
flex: 1;
flex-shrink: 1;
flex-direction: row;
justifyContent: flex-end;
align-items: center;
`;

export const Icon = styled.Image`
width: 15px;
height: 15px;
`;

export const Rating = styled.View`
flex-direction: row;
padding: ${props => props.theme.space[2]};
`;

export const Address = styled.Text`
font-family: ${props => props.theme.fonts.body};
font-size: ${props => props.theme.fontSizes.caption};
padding: ${props => props.theme.space[2]};
`;

