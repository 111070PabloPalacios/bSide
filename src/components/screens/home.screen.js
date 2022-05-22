import React from "react";
import { StatusBar} from "react-native";
import { Header } from "../header/header.component";
import { ProductDisplay } from "./product-display.component";

export const HomeScreen = ({navigation}) => {

    return (
        <>
        <StatusBar translucent={true} backgroundColor={'black'}/> 
          <Header/>
          <ProductDisplay navigation={navigation}/>
        </>
      );
}