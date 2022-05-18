import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { CartScreen } from "../cart/cart.screen";
import { GoBackHeader } from "../../components/goBack/go-back.component";
import { Carrousel } from "../../components/carrousel/carrousel.component";
import { Selector } from "../../components/selector/selector.component";
import { AmmountButton } from "../../components/ammount-button/ammount-button";
import { CartContext } from "../../services/cart/cart.context";
import {
  CarrouselWrapper,
  TextWrapper,
  Title,
  Price,
  AmmountSectionWrapper,
  ButtonWrapper,
  Ammount,
  AmmountTextWrapper,
} from "./remeras-screen.styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/mainButton/button.component";
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.3;
const imageH = imageW * 0.24;

export const RemerasScreen = ({ route }) => {
  //const { width } = useWindowDimensions();
  const { itemArray } = route.params;
  const {
    color,
    size,
    colorPosition,
    productList,
    arrayHandler,
    image,
    setImage,
    updateProduct
  } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const [amountComponent, setAmountComponent] = useState(null);
  const [cartOrder, setCartOrder] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    for (let i = 0; i < itemArray.images.length; i++) {
      if (colorPosition === itemArray.images.indexOf(itemArray.images[i])) {
        setImage(itemArray.images[i]);
        //arrayHandler(itemArray.key, image, itemArray.title, color, size, amount, itemArray.price);
        break;
      };}
    });

  const cartHandler = () => {

    if(productList.length === 0){
      arrayHandler(itemArray.key, image, itemArray.title, color, size, amount, itemArray.price);
    }

    if(productList.length > 0){
      for (let i = 0; i < productList.length; i++) {
        if(productList[i].key === itemArray.key && productList[i].size === size &&
          productList[i].color === color){
          updateProduct(amount, productList[i].key);
          console.log('El color de lista es: ' + productList[i].color + 'y el color seleccionado es: ' + color)
          break;
        }else{
          arrayHandler(itemArray.key, image, itemArray.title, color, size, amount, itemArray.price);
        }
      }
    }

    navigation.navigate("CartScreen");
    setAmount(1);
  };

  return (
    <>
      <ScrollView>
        <StatusBar translucent={true} backgroundColor={"black"} />
        <GoBackHeader />
        <View style={{ flex: 1 }}>
          <CarrouselWrapper>
            <Carrousel data={itemArray.images} he={imageH} wi={imageW} />
          </CarrouselWrapper>
          <TextWrapper>
            <Title>{itemArray.title}</Title>
          </TextWrapper>
          <TextWrapper>
            <Price>${itemArray.price}</Price>
          </TextWrapper>
        </View>
        <View style={{ marginRight: 15, marginLeft: 15 }}>
          <Selector text="talles" array={itemArray.sizes} />
          <Selector text="color" array={itemArray.color} />
        </View>
        <AmmountSectionWrapper>
          <AmmountTextWrapper>
            <Text style={{ fontSize: 20 }}>CANTIDAD</Text>
          </AmmountTextWrapper>
          <ButtonWrapper>
            {amount === 1 ? (
              <AmmountButton position="down" />
            ) : (
              <AmmountButton
                position="down"
                action={() => setAmount(amount - 1)}
              />
            )}
            <Ammount>{amount}</Ammount>
            <AmmountButton position="up" action={() => setAmount(amount + 1)} />
          </ButtonWrapper>
        </AmmountSectionWrapper>
      </ScrollView>
      <Button cartHandler={cartHandler} action="addToCart" 
      title="Agregar al Carrito"/>
    </>
  );
};
