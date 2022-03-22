import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../infrastructure/theme';

const sizeVariant = {
    small: 1, 
    medium: 2,
    large: 3,
};

const positionVariant = {
    top: 'marginTop', 
    bottom: 'marginBottom',
    left: 'marginLeft',
    right: 'marginRight',
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];
    return `${property}: ${value}`
}

export const Spacer = styled.View`
    ${({ position, size }) => getVariant(position, size, theme) }
`
