import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const AmmountButton = ({ position, action}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0000000D",
          height: 60,
          width: 36,
          alignItems: "center",
          justifyContent: "center",
        }}

        onPress={action}
      >
        {position === "down" ? 
        <AntDesign name="down" size={28} /> : 
        <AntDesign name="up" size={28} />}
      </TouchableOpacity>
    </View>
  );
};
