import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

export const ItemCard = ({itemArray, navigation}) => {

    return(
        <TouchableOpacity style={{ flex: 1, marginRight: 5,alignItems: 'center'}} 
        onPress={() => navigation.navigate("RemerasScreen",{itemArray})}>
                <View style={{flex: 1, alignItems: 'center'}}>
                <ItemImage source={{uri: itemArray.images[0]}}/>
                </View>
                <TextWrapper>
                <Title>{itemArray.title}</Title>
              </TextWrapper>
            </TouchableOpacity>
    );
};

const ItemImage = styled(Image)`
    height: 100px;
    width: 100px;
    align-items: center;
    justify-content: center;
`;

const TextWrapper = styled.View`
  padding-bottom: 50px;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  position: absolute;
  font-family: Oswald_400Regular;
`;