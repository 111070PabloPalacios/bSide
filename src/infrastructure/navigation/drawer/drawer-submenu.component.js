import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Easing } from "react-native-reanimated";
import { SubmenuItem } from "./submenuItem.component";
import styled from "styled-components/native";

const ItemParameters = {
  fontFamily: "Oswald_400Regular",
  fontSize: 20,
  left: 0,
};

export const DrawerSubMenu = (props) => {
  const [nestedItemDrawer, setNestedItemDrawer] = useState(false);
  const [animationState, setAnimationState] = useState(0);
  const rotateValueHolder = useRef(new Animated.Value(0)).current;

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  const handleTouch = () => {
    console.log('pressed')
  }

  useEffect(() => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: nestedItemDrawer ? 1 : 0,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: false,
      onComplete: setAnimationState(1),
    }).start();
  }, [nestedItemDrawer]);

  const itemDrawer = () => {
    if (nestedItemDrawer === false) {
      setNestedItemDrawer(true);
      setAnimationState(1);
    } else {
      setNestedItemDrawer(false);
      setAnimationState(0);
    }
  };
  return (
    <>
      <DrawerItem
        label={props.title}
        inactiveTintColor="white"
        labelStyle={ItemParameters}
        onPress={() => itemDrawer(nestedItemDrawer, setNestedItemDrawer)}
        icon={({ color, size }) => (
          <Animated.View
            style={[styles.viewStyle, { transform: [{ rotate: rotateData }] }]}
          >
            <AntDesign
              name="down"
              size={20}
              style={{
                borderColor: "black",
                borderWidth: 1,
                padding: 1,
              }}
            />
          </Animated.View>
        )}
      />
      {nestedItemDrawer && (
        <SubMenuSection>
          {props.items.map((x, i) => (
            <SubmenuItem title={x.title} labelStyle={ItemParameters}
            index={i}/>
          ))}
        </SubMenuSection>
      )}
      {/*<SubMenuSection></SubMenuSection>*/}
    </>
  );
};

const SubMenuSection = styled(Drawer.Section)`
  background-color: #88ab59;
`;

const styles = StyleSheet.create({
  viewStyle: {
    position: "absolute",
    right: 5,
  },
});
