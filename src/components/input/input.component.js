import React, {useState} from "react";
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

export const Input = ({placeholder, error,onChangeText}) => {
    return(
        <>
        <TextInput placheholder={placeholder} error={error}
        onChangeText={() => onChangeText()} />
        {error && <Error>{error}</Error>}
        </>
    );
}

const TextInput = styled.TextInput`
  padding-horizontal: 10px;
  height: 40px;
  margin-top: 12px;
  background-color: #ffff;
  font-family: Oswald_300Light;
  font-size: 18px;
  border-width: 2px;
  border-color: ${(props) => props.error ? '#db3e3e' : '#9f9f9f'};
  elevation: -1;
`;

const Error = styled.Text`
  background-color: #db3e3e;
  font-family: Oswald_400Regular;
  text-align: center;
  color: white;
`;
