import React from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";
import { Header } from "../header/header.component";
import { useNavigation } from "@react-navigation/native";
import { ItemCard } from "../card/card.component";

export const SearchResultScreen = ({ param }) => {
  const navigation = useNavigation();
  const searchData = useSelector((state) => state.remeras.searchResults);

  console.log(searchData);

  const header = (
    <>
      <Header />
      <View
        style={{
          alignItems: "center",
          borderBottomColor: "black",
          borderBottomWidth: 2,
          marginRight: 15,
          marginLeft: 15,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontFamily: "Oswald_300Light", fontSize: 28 }}>
          Resultados de Busqueda
        </Text>
      </View>
    </>
  );

  return (
    <View>
      <FlatList
        data={searchData}
        renderItem={({ item, index }) => (
          <ItemCard itemArray={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.key}
        key={searchData.key}
        numColumns={2}
        ListHeaderComponent={header}
      />
    </View>
  );
};
