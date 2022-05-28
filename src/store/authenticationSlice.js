import { createSlice } from "@reduxjs/toolkit";
import { useNavigation, NavigationAction } from "@react-navigation/native";
//import {NavigationActions} from 'react-navigation'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//const navigation = useNavigation();

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isLoading: null,
        user: null,
        userName: null,
        userData: {
            nombre: '',
            apellido: '',
            email: ''
        },
        error: null,
        goTo: null,
        allowRegisterAction: false,
        isAuthenticated: false
    },
    reducers:{
        setUser(state,action){
            state.user = action.payload;
        },
        authenticate(state, action){
            state.isAuthenticated = action.payload;
            console.log(state.isAuthenticated);
        },
        setError(state, action){
            state.error = action.payload;
            console.log(state.error);
        },
        getData(state, action){
            //state.userName = "Carlos";
            const data = action.payload;
            state.userData = {
                nombre: data["nombre"],
                apellido: data["apellido"],
                email: data["email"]
            }
            console.log(state.userData);
        },
        navigateTo(state,action){
            state.goTo = action.payload;
        }
    }
});

export const authenticationActions = authenticationSlice.actions;

export const onLogin = (email, password) => {
    return async (dispatch) => {
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(async (usr) => {
            dispatch(authenticationActions.authenticate(true));
            dispatch(authenticationActions.setUser(usr.user.email));
            dispatch(authenticationActions.setError(null));
            const response = await firebase.firestore().collection('usuarios').get();
            dispatch(authenticationActions.navigateTo("Home")); 
            response.docs.forEach(res => {
                if(email === res.data()["email"])
                {
                    dispatch(authenticationActions.getData(res.data()));
                    dispatch(authenticationActions.navigateTo("Home"));
                }
            });
            }).catch((e) => {
                dispatch(authenticationActions.setError(e.code));
                //dispatch(authenticationActions.navigateTo(null));
                console.log(e);
            });
    }
};

export const getUserData = (userId) => {
    return async(dispatch) => {
        try{
            const response = await firebase.firestore().collection('usuarios').get();
            response.docs.forEach(res => {
                console.log(res.data()["email"]);
            })
        }catch(e){

        }
    }
}

export const register = (email, nombre ,password) => {
    return async(dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((u) => {
            dispatch(authenticationActions.setError(null));
            firebase.firestore().collection('usuarios').add({
                email: email,
                nombre: nombre,
                cart: []
            });
            console.log(email);
            dispatch(onLogin(email, password));
        })
        .catch((e) => {
            dispatch(authenticationActions.setError(e.message));
            console.log(e.code);
        })
    }
}

export const onLogout = () => {
    return async(dispatch) => {
        firebase.auth().signOut()
        .then(() => {
            dispatch(authenticationActions.setUser(null));
            dispatch(authenticationActions.authenticate(false));
        })
    }
}