import React, { useState, useEffect } from "react";
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
  ModalText,
  Title,
  Price,
  AmmountSectionWrapper,
  ButtonWrapper,
  Ammount,
  AmmountTextWrapper,
} from "./remeras-screen.styles";
import { cartActions, cartSlice } from "../../store/cartSlice";
import { Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/mainButton/button.component";
const { width, height } = Dimensions.get("screen");
const imageW = width * 0.3;
const imageH = imageW * 0.24;

export const RemerasScreen = ({ route }) => {
  const { itemArray } = route.params;
  const [amount, setAmount] = useState(1);
  const [modalState, setModalState] = useState(false);
  const [cartOrder, setCartOrder] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const color = useSelector(state => state.cart.color);
  const size = useSelector(state => state.cart.size);
  const image = useSelector(state => state.cart.image);
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);

  useEffect(() => {
      dispatch(cartSlice.actions.getImage(itemArray.images));
    });

  const cartHandler = () => {
    const obj = {
      key: itemArray.key,
      image: image,
      color: color,
      originalPrice: 2350,
      price: itemArray.price * amount,
      sexo: itemArray.sexo,
      size: size,
      title: itemArray.title,
      amount: amount
    }
    !isAuthenticated && setModalState(true)
    if(isAuthenticated){
      dispatch(cartActions.addItemToCart(obj));
      dispatch(cartActions.getTotal(itemArray.price * amount));
      navigation.navigate("CartScreen");
      setAmount(1);
    }
  };

  const modalHandler = () => {
    modalState === false ? setModalState(true) : setModalState(false); 
  }

  return (
    <>
    <GoBackHeader />
      <ScrollView>
        <StatusBar translucent={true} backgroundColor={"black"} />
        {modalState &&  <Overlay>
          <ModalText>Para comprar se debe iniciar sesion</ModalText>
          <Button title="Cerrar" cartHandler={modalHandler} action="addToCart"/>
        </Overlay>}
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
