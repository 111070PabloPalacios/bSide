import React, { useState, useContext } from "react";
import { View, Text, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { RemerasContext } from "../../services/remeras/remeras.context";
import { Carrousel } from "../carrousel/carrousel.component";
import { ItemCard } from "../card/card.component";
const { width, height } = Dimensions.get("screen");
const imageW = width * 1;
const imageH = imageW * 0.54;

const carrouselData = ["https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1", 
"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1",
"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
];

export const ProductDisplay = ({navigation}) => {
  const { remeras } = useContext(RemerasContext);
  const [people, setPeople] = useState([
    { name: "shaun", id: 1 },
    { name: "yoshi", id: 2 },
    { name: "susan", id: 3 },
  ]);

  const header = (
    <>
    <View style={{flex: 1}}>
    <Carrousel data={carrouselData} he={imageH} wi={imageW} variant="cover"/>
    </View>
    <TextWrapper>
      <Text style={{ fontFamily: "Oswald_400Regular", fontSize: 30 }}>Productos Destacados</Text>
    </TextWrapper>
    </>
  );

  return (
    <>
    <View style={{ flex: 1 }}>
      <FlatList
      nestedScrollEnabled
        data={remeras}
        renderItem={({ item, index}) => (
            <ItemCard itemArray={item} navigation={navigation}/>
        )}
        keyExtractor={(item) => item.key}
        key={"#"}
        numColumns={2}
        ListHeaderComponent={header}
      />
    </View>
    </>
  );
};

const CarrouselStyle = styled(Carrousel)`
  height: 50px;
  width: 50px;
`;

const TextWrapper = styled.View`
  border-bottom-color: black;
  border-bottom-width: 4px;
  margin-left: 10px;
  margin-right: 10px;
`;
