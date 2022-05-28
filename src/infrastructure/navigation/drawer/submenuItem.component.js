import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, Animated } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { sendCartData } from "../../../store/remerasSlice";
import { useNavigation } from "@react-navigation/native";

export const SubmenuItem = ({title, labelStyle, index}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleTouch = () => {
    if(title){
        dispatch(sendCartData(title));
        navigation.navigate("SearchResult");
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