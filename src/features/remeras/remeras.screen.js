import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GoBackHeader } from "../../components/goBack/go-back.component";
import { Carrousel } from "../../components/carrousel/carrousel.component";
import { Selector } from "../../components/selector/selector.component";
import { AmmountButton } from "../../components/ammount-button/ammount-button";
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
import { cartActions, cartSlice } from "../../store/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/mainButton/button.component";
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.3;
const imageH = imageW * 0.24;

export const RemerasScreen = ({ route }) => {
  //const { width } = useWindowDimensions();
  const { itemArray } = route.params;
  const [amount, setAmount] = useState(1);
  const [amountComponent, setAmountComponent] = useState(null);
  const [cartOrder, setCartOrder] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const color = useSelector(state => state.cart.color);
  const size = useSelector(state => state.cart.size);
  const image = useSelector(state => state.cart.image);

  useEffect(() => {
      dispatch(cartSlice.actions.getImage(itemArray.images));
    });

  const cartHandler = () => {
    const obj = {
      key: itemArray.key,
      image: image,
      color: color,
      price: itemArray.price,
      sexo: itemArray.sexo,
      size: size,
      title: itemArray.title,
      amount: amount
    }
    dispatch(cartActions.addItemToCart(obj));
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
