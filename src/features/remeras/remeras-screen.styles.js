import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.3;
const imageH = imageW * 0.24;

export const CarrouselWrapper = styled.View`
    flex: 1;
    height: ${imageH * 15}px;
    justify-content: center;
    align-items: center;
`;

export const TextWrapper = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
`;

export const Title = styled.Text`
    font-family: Oswald_400Regular;
    font-size: 28px;
    text-align: center;
`;

export const Price = styled.Text`
    font-family: Oswald_400Regular;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    color: #8cc63e;
`;

export const AmmountSectionWrapper = styled.View`
    display: flex;
    margin-top: 14px;
    margin-right: 28px;
    margin-left: 28px;
    margin-bottom: 15px;
`;

export const ButtonWrapper = styled.View`
    height: 64px;
    width: 112px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-color: gray;
    margin-left: auto;
    border-width: 2px;
`;

export const Ammount = styled.Text`
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
`;

export const AmmountTextWrapper = styled.Text`
    display: flex;
    position: absolute;
    justify-content: center;
    margin-top: 20px;
`;