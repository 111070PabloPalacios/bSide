import React, { useState, createContext, Children, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [size, setSize] = useState(null);
  const [sizePosition, setSizePosition] = useState(null);
  const [color, setColor] = useState(null);
  const [colorPosition, setColorPosition] = useState(null);
  const [image, setImage] = useState(null);
  //const [amount, setAmount] = useState(1);
  const [unique, setUnique] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [productList, setProductList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState([]);

  const arrayHandler = (key, image, title, color, size, amount, price) => {
    setProductList([
      ...productList,
      {
        key: key,
        image: image,
        title: title,
        color: color,
        size: size,
        amount: amount,
        tag: null,
        price: price,
      },
    ]);
  };
  const updateProduct = (amount, key, size, color, action) => {
    !action &&
      setProductList(
        productList.map((item) =>
          item.key === key
            ? { ...item, amount: amount + item.amount, tag: amount }
            : item
        )
      );

    action === "substract" &&
      setProductList(
        productList.map((item) =>
          item.key === key && item.size === size && item.color === color
            ? { ...item, amount: amount - 1, tag: amount }
            : item
        )
      );

    action === "add" &&
      setProductList(
        productList.map((item) =>
          item.key === key && item.size === size && item.color === color
            ? { ...item, amount: amount + 1, tag: amount }
            : item
        )
      );
  };

  const deleteItem = (item) => {
    //const filteredData = productList.filter(items => items.key !== item.key);
    //setItemToDelete([]);
    for (let i = 0; i < productList.length; i++) {
      if (
        productList[i].key === item.key &&
        productList[i].color === item.color &&
        productList[i].size === item.size
      ) {
        setItemToDelete(productList[i]);
        break;
      }
    }
  };

  useEffect(() => {
    const filteredData = productList.filter(
      (items) => items !== itemToDelete
    );
    setProductList(filteredData);
    console.log(filteredData);
  },[itemToDelete]);


  const handleTotal = (latestPrice) => {
    setTotalPrice([...totalPrice, latestPrice]);
  };

  return (
    <CartContext.Provider
      value={{
        size,
        setSize,
        sizePosition,
        setSizePosition,
        color,
        setColor,
        colorPosition,
        setColorPosition,
        image,
        setImage,
        totalPrice,
        setTotalPrice,
        handleTotal,
        productList,
        arrayHandler,
        updateProduct,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
