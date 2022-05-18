import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export const SubmenuItem = ({title, labelStyle, index}) => {

    const navigation = useNavigation();

const handleTouch = () => {
    if(title === "Hombre"){
        navigation.navigate("SearchResult", {param: "Hombre"});
    }
} 

    return(
        <DrawerItem label={title}
        inactiveTintColor="white"
        labelStyle={labelStyle}
        key={"title-" + index}
        onPress={() => handleTouch()}
        />
    );
}