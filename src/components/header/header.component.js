import React, { useState, useEffect,useContext } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { DrawerActions} from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { SearchResultScreen } from "../screens/searchResults.screen";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart/cart.context";
import { RemerasContext } from "../../services/remeras/remeras.context";
import { Ionicons } from "@expo/vector-icons";
//import SearchBar from "@pnap/react-native-search-bar";

const IMAGE_URL =
  "https://d3ugyf2ht6aenh.cloudfront.net/stores/019/792/themes/common/logo-653708850-1564683786-809f7e9e9f9b7cc192aebf84830e1bed1564683787-480-0.png?0";

export const Header = () => {
  const { productList } = useContext(CartContext);
  const {search, setSearchResults} = useContext(RemerasContext);
  const [query, setQuery] = useState(null);
  const navigation = useNavigation();

  const searchbarHandler = () => {
    search(query);
    setQuery(null);
    navigation.navigate("SearchResult");
  }

  useEffect(() => {
    setQuery(null);
  },[])

  return (
    <Wrapper>
      <DrawerWrapper onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Ionicons name="menu" size={30} color="#8cc63e"/>
      </DrawerWrapper>
      <SearchBarWrapper>
        <Searchbar style={{width: 250, flexDirection: 'row-reverse'}} 
        onChangeText={(t) => setQuery(t)}
        value={query}
        placeholder="Ingrese texto"
        onIconPress={() => searchbarHandler()} />
      </SearchBarWrapper>
      <TouchableOpacity style={{top: 10}} onPress={() => navigation.navigate("CartScreen")}>
        <Items>{productList.length}</Items>
      <Entypo name="shopping-cart" size={30} />
      </TouchableOpacity>
    </Wrapper>
  );
};

const DrawerWrapper = styled(TouchableOpacity)`
  top: 10px;
  margin-right: auto;
  border-color: #8cc63e;
  border-width: 2px;
  margin-left: 4px;
`;

const SearchBarWrapper = styled(View)`
  position: absolute;
  top: 34px;
  margin-right: auto;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  padding-vertical: 34px;
  border-color: #ddd;
  border-bottom-width: 2px;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 4px;
  elevation: 1;
`;

const Logo = styled(Image)`
  height: 70px;
  width: 100px;
  margin-right: auto;
  margin-top: 10px;
  right: 180p;
`;

const NavWrapper = styled(TouchableOpacity)`
  margin-right: auto;
  border-color: red;
  border-width: 2px;
`;

const Items = styled(Text)`
  position: absolute;
  right: 32px;
`;