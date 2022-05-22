import React from "react";
import {View, Text} from "react-native";
import styled from 'styled-components/native';

export const TitleHeader = ({title}) => {
    return(
        <TitleWrapper>
            <Title>{title}</Title>
        </TitleWrapper>
    );
}

const Title = styled.Text`
    text-align: center;
    font-family: Oswald_300Light;
    font-size: 30px;
`;

const TitleWrapper = styled.View`
    margin-bottom: 10px;
    border-bottom-color: black;
    border-bottom-width: 1.5px;
`;