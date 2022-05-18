import React, {useState, useEffect} from "react";
import {StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "../radiobutton/radiobutton.component";
import { GoBackHeader } from "../goBack/go-back.component";
import styled from "styled-components/native";

export const OptionsScreen = ({navigation, route}) => {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(null);
    const { text, itemArray, onPress} = route.params;

    const handleChecked = (itemName) => {
        setValue(itemName);
        onPress(itemName);
    }; 

    return(
        <>
        <StatusBar translucent={true} backgroundColor={'black'}/> 
        <GoBackHeader text={text}/>
        {
            itemArray.map((x,i) => (
                <RadioButtonWrapper key={"size-" + i}>
                <RadioButton text={x} func={handleChecked} checked={checked} value={value}/>
                </RadioButtonWrapper>
            ))
        }
        </>
    );
}

const RadioButtonWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
    border-bottom-color: gray;
    border-bottom-width: 2px;
    align-items: center;
`;

const TopHeader = styled.View`
    margin-top: ${StatusBar.currentHeight}px;
    height: 80px;
    padding-left: 15px;
    flex-direction: row;
    align-items: center;
    border-color: #ddd;
    border-bottom-width: 2px;
    shadow-offset: 0px 5px;
    shadow-opacity: 0.8;
    shadow-radius: 4px;
    elevation: 1;
`;