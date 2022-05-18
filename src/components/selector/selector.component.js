import React, {useEffect, useState, useContext}from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../services/cart/cart.context";

export const Selector = ({text, array}) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const { sizePosition ,setSize, setColor, setSizePosition, setColorPosition} = useContext(CartContext);
    useEffect(() => {
        if(title === null){
            setTitle(text);
        };

        if(text === "talles"){
            setSize(array[0]);
            handlePosition(array[0], setSizePosition);
        }
        else{
            setColor(array[0]);
            handlePosition(array[0], setColorPosition);
        }
    },[]);

    const updateValue = (selectedItem) => {
        setSelectedValue(selectedItem);

        if(text === "talles"){
            setSize(selectedItem);
            handlePosition(selectedItem, setSizePosition);
        }
        else{
            setColor(selectedItem);
            handlePosition(selectedItem, setColorPosition);
        }
    };

    //Funcion que toma como parametros el prom text y un setter. Basicamente dice que 
    //si el text es igual al que se encuentra en cierta posicion del array, agarre la 
    //posicion en la que esta.
    const handlePosition = (item, setPosition) => {
        for (let i = 0; i < array.length; i++) {
            if(item === array[i]){
                setPosition(i);
                break;
            }
        }
    };

    return(
        <Wrapper onPress={() => 
            navigation.navigate("OptionsScreen", {navigation, text: text, itemArray: array, onPress: updateValue})}>   
            <Text style={{fontSize:20, color: 'black'}}>{text.toUpperCase()}:</Text>
            <Text style={{fontSize: 20, color: '#8cc63e'}}>{!selectedValue ? array[0] : selectedValue}</Text>
            <View style={{marginLeft: 'auto', marginTop: 'auto', marginBottom: 4}}>
            <AntDesign name="right" size={30} style={{color: '#8cc63e'}}/>
            </View>
         </Wrapper> 
    );
}

export const Wrapper = styled(TouchableOpacity)`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    margin-top: 10px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 2px;
    height: 70px;
    border-color: gray;
    border-width: 3px;
`;