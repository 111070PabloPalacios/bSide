import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        color: null,
        colorPosition: null,
        colorsArray: [],
        size: null,
        image: null,
        cartItems: [],
        totalPrice: 0,
        changed: false,
        itemToDelete: null
    },
    reducers:{
        addItemToCart(state, actions){
            const newItem = actions.payload;
            const existingItem = state.cartItems.
            find(item => item.key === newItem.key && item.size === newItem.size && item.color === newItem.color);
            state.changed = true;
            if(!existingItem){
                state.cartItems.push({
                    key: newItem.key,
                    image: newItem.image,
                    color: newItem.color,
                    originalPrice: newItem.price,
                    price: newItem.price,
                    sexo: newItem.sexo,
                    size: newItem.size,
                    title: newItem.title,
                    amount: newItem.amount
                })
            }else{
                existingItem.amount = newItem.amount + existingItem.amount;
                existingItem.price = existingItem.price + (newItem.amount * newItem.originalPrice);
                console.log(existingItem.amount + newItem.amount * existingItem.originalPrice);
            }
        },
        deleteItemFromCart(state,action){
            state.itemToDelete = null;
            const itemToDelete = action.payload;
            const array = state.cartItems;
            for (let i = 0; i < array.length; i++) {
                if(itemToDelete.key === array[i].key && 
                    itemToDelete.size === array[i].size && 
                    itemToDelete.color === array[i].color){
                    const filteredData = array.filter(item => item !== itemToDelete);
                    state.itemToDelete = array[i];
                    console.log(state.itemToDelete.price);
                    break;
                }
            }
            if(state.cartItems.length > 1){
                state.totalPrice = state.totalPrice - state.itemToDelete.price;
            }else{
                state.totalPrice = 0;
            }
            const filteredData = state.cartItems.filter(item => item !== state.itemToDelete);
            state.cartItems = filteredData;
        },
        emptyCart(state){
            state.cartItems.length = 0;
        },
        setColorPosition(state, actions){
            const color = actions.payload["color"];
            const array = actions.payload["colorsArray"];
            for (let i = 0; i < array.length; i++) {
                if(array[i] === color){
                    state.colorPosition = i;
                    break;
                }
            };
        },
        getImage(state, action){
            console.log(action.payload);
            const array = action.payload;
            for (let i = 0; i < array.length; i++) {
                if(state.colorPosition === i){
                    state.image = array[i];
                    console.log(state.image);
                    break;
                }
            }
        },
        setColor(state,actions){
            state.color = actions.payload
        },
        setSize(state,actions){
            state.size = actions.payload
        },
        addAmmount(state, action){
            const array = action.payload;
            const existingItem = state.cartItems.find(item => item.key === array.key 
                && item.size === array.size && item.color === array.color);
            if(existingItem){
                const index = state.cartItems.indexOf(existingItem);
                state.cartItems[index].amount = state.cartItems[index].amount + 1;
                state.cartItems[index].price =  state.cartItems[index].amount * 2350;
                state.totalPrice = state.totalPrice + 2350;
                console.log(state.cartItems[index].price);
            }
        },
        restAmmount(state, action){
            const array = action.payload;
            const existingItem = state.cartItems.find(item => item.key === array.key 
                && item.size === array.size && item.color === array.color);
            if(existingItem){
                const index = state.cartItems.indexOf(existingItem);
                if(state.cartItems[index].amount > 1){
                    state.cartItems[index].amount = state.cartItems[index].amount - 1;
                    state.cartItems[index].price =  state.cartItems[index].amount * 2350;
                    state.totalPrice = state.totalPrice - 2350;
                } 
            }
        },
        getTotal(state, action){
            state.totalPrice = state.totalPrice + action.payload;
            console.log(state.totalPrice);
        }
    }
});

export const cartActions = cartSlice.actions;