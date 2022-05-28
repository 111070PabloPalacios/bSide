import {createSlice} from '@reduxjs/toolkit';
import { messageActions } from './messagesSlice';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const REMERAS = [];
export const REMERAS_BUSQUEDA = [];

export const remerasSlice = createSlice({
    name: 'remeras',
    initialState: {
        items: [],
        searchResults: [],
        searchValue: null,
        initialValue: true,
    },
    reducers:{
        fetchData(state, actions) {
            if(state.items.length > 0){
                state.initialValue = false;
            }
            if(state.items.length === 0){
                const itemToAdd = actions.payload;
                //state.items.length = 0;
                itemToAdd.forEach((x) => {
                    state.items.push({
                        color: x.color,
                        images: x.images,
                        key: x.key,
                        price: x.price,
                        sexo: x.sexo,
                        sizes: x.sizes,
                        title: x.title,
                        title: x.title});
                });
            }
        },
        getSearchResults(state, actions){
                state.searchResults.length = 0;
                const results = actions.payload;
                results.forEach((x) => {
                    state.searchResults.push({
                        color: x.color,
                        images: x.images,
                        key: x.key,
                        price: x.price,
                        sexo: x.sexo,
                        sizes: x.sizes,
                        title: x.title,
                        title: x.title});
                });
        }
    }
});

export const remerasActions = remerasSlice.actions;

export const extractRemerasData = () => {
    return async(dispatch) =>{
        try{
            const response = await firebase.firestore().collection('remeras').get();
            response.docs.forEach(res => {
                REMERAS.push(res.data());
            });
            dispatch(remerasActions.fetchData(REMERAS))
        }catch (e) {
            console.log(e);
        };
    }
}

export const sendCartData = (value) => {
    return async(dispatch) => {
        try{
            if(value !== null && (value.toUpperCase() !== "HOMBRE" && value.toUpperCase() !== "MUJER")){
            REMERAS_BUSQUEDA.length = 0;
            await firebase.firestore().collection('remeras')
            .orderBy('title').startAt(value.toUpperCase())
            .endAt(value.toUpperCase() + '\uf8ff').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((element) => {
                  const data = element.data();
                  REMERAS_BUSQUEDA.push(data);
                });
            });
            dispatch(remerasActions.getSearchResults(REMERAS_BUSQUEDA));
            //console.log(REMERAS_BUSQUEDA);
            }
            else
            if(value !== null && (value.toLowerCase() === "mujer" || value.toLowerCase() === "hombre")){
                REMERAS_BUSQUEDA.length = 0;
                console.log(value);
            await firebase.firestore().collection('remeras')
            .orderBy('sexo').startAt(value.toLowerCase())
            .endAt(value.toLowerCase() + '\uf8ff').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((element) => {
                  const data = element.data();
                  REMERAS_BUSQUEDA.push(data);
                });
            });
            dispatch(remerasActions.getSearchResults(REMERAS_BUSQUEDA));
            }
            else{
                return;
            }
        }catch(e){
            console.log(e);
        }
    }
};