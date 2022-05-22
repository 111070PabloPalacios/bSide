import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const RemerasService = (collection, array) => 
firebase
.firestore()
.collection(collection)
.get()
.then((querySnapshot) => {
querySnapshot.forEach((element) => {
  var data = element.data();
  array((arr) => [...arr, data]);
});
});

export const SearchService = (value,array) => 
firebase.firestore().collection('remeras')
.orderBy('title').startAt(value.toUpperCase()).endAt(value.toUpperCase() + '\uf8ff').get()
.then((querySnapshot) => {
  querySnapshot.forEach((element) => {
    var data = element.data();
    array((arr) => [...arr, data]);
  });
  });