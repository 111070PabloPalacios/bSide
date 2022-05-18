import React, { useState, useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

export const RadioButton = ({text, func, value}) => {
  const [checked, setChecked] = useState();
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();

  const handleRadio = (itemText) => {
    func(text);
    navigation.goBack();
  }

  useEffect(() => {
    if(text === value){
      setChecked(true);
    }

    if(text === value && !checked){
        setChecked(true);
      }
    else if(text !== value && checked){
        setChecked(false);
    }
  });

  return (
    <>
      <Button
        checked={checked}
        onPress={() => handleRadio(text)}/>
      <Text style={{ marginRight: "auto", paddingLeft: 10 }}>{text}</Text>
    </>
  );
};

const Button = styled(TouchableOpacity)`
  background-color: ${(props) => (!props.checked ? "#dfefc9" : "#8cc63e")};
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
  margin-left: 15px;
  border-radius: 50px;
`;
