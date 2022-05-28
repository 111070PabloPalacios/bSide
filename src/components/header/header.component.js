import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useSelector ,useDispatch } from "react-redux";
import { remerasActions, sendCartData } from "../../store/remerasSlice";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { DrawerActions} from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
//import SearchBar from "@pnap/react-native-search-bar";

const IMAGE_URL =
  "https://d3ugyf2ht6aenh.cloudfront.net/stores/019/792/themes/common/logo-653708850-1564683786-809f7e9e9f9b7cc192aebf84830e1bed1564683787-480-0.png?0";

export const Header = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  //const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartAmount = useSelector(item => item.cart.cartItems)

  const searchbarHandler = async () => {
    setIsSearching(true);
    setQuery(null);
    dispatch(sendCartData(query));
    navigation.navigate("SearchResult");
  }

  const drawerHandler = () => {
    console.log('Open Drawer');
    navigation.navigate("home");
    //DrawerActions.toggleDrawer();
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Wrapper>
      <DrawerWrapper onPress={() => drawerHandler()}>
        <Ionicons name="menu" size={30} color="#8cc63e"/>
      </DrawerWrapper>
      <SearchBarWrapper>
        <Searchbar 
        style={{width: 250, flexDirection: 'row-reverse',
        marginTop:10}} 
        onChangeText={(t) => setQuery(t)}
        value={query}
        placeholder="Ingrese texto"
        onIconPress={() => searchbarHandler()} />
      </SearchBarWrapper>
      <TouchableOpacity style={{top: 10}} onPress={() => navigation.navigate("CartScreen")}>
        <Items>{cartAmount.length}</Items>
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
  margin-right: auto;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
