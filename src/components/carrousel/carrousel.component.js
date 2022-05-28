import React, {useRef, useState, useEffect} from "react";
import { View, Image, Animated, StyleSheet ,Dimensions,FlatList } from "react-native";
import styled from 'styled-components/native';
const { width, height } = Dimensions.get("screen");
const imageW = width * 1;
const imageH = imageW * 0.54;

/*const data = ["https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1", 
"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1",
"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
];*/

export const Carrousel = ({data, he, wi, variant}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    return(
      <CarrouselWrapper>
          <Animated.FlatList 
          data={data}
          horizontal
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true}
          )}
          keyExtractor={(_,index) => index.toString()}
          renderItem={({item}) => {
            return (<>
            {variant === "cover" ? 
            <Cover source={{uri: item}} 
            style={{resizeMode: "contain", alignSelf: 'center',height: he/1.5, width: wi}}/> :
          <CoverWrapper style={{width}}>
            <Cover source={{uri: item}} style={{flex: 0.5,height: 100, width: 250}}/>
          </CoverWrapper>
          }</>)
          }}
          />
          </CarrouselWrapper>
    );
};

const CoverWrapper = styled(View)`
    justify-content: center;
    align-items: center;
`;

const Cover = styled(Image)`
    flex: 1;
    resize-mode: cover;
`;

const CarrouselWrapper = styled.View`
    justify-content: center;
`;