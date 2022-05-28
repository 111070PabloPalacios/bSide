import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

export const ItemCard = ({itemArray, navigation}) => {

    return(
        <TouchableOpacity style={{ flex: 1, marginRight: 35,
      marginLeft: 35, marginBottom: 18}} 
        onPress={() => navigation.navigate("RemerasScreen",{itemArray})}>
                <View style={{alignItems: 'center'}}>
                <ItemImage source={{uri: itemArray.images[0]}}/>
                </View>
                <TextWrapper>
                <Title numberOfLines={2}>{itemArray.title}</Title>
                <Price>${itemArray.price}</Price>
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
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  text-align: center;
  font-family: Oswald_400Regular;
`;

const Price = styled.Text`
  font-size:16px;
  font-family: Oswald_700Bold;
  color: #8cc63e;
`