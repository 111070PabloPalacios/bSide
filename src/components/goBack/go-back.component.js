import React from "react";
import { View, TouchableOpacity, Text, StatusBar} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const GoBackHeader = ({ text }) => {
  const navigation = useNavigation();

  return (
    <TopHeader>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} />
      </TouchableOpacity>
      {text && (
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "black" }}>{text}</Text>
        </View>
      )}
    </TopHeader>
  );
};

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
