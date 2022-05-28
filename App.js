import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { DrawerNavigation } from "./src/infrastructure/navigation/drawer/drawer.navigator";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import thunk from "redux-thunk";
import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as UseBoldOswald,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

import { useFonts as UseLightOswald, Oswald_300Light } from "@expo-google-fonts/oswald";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Header } from "./src/components/header/header.component";
import { RemerasContextProvider } from "./src/services/remeras/remeras.context";
import { CartContextProvider } from "./src/services/cart/cart.context";
import { HomeScreen } from "./src/components/screens/home.screen";
import { RemerasScreen } from "./src/features/remeras/remeras.screen";
import { OptionsScreen } from "./src/components/screens/options.screen";
import { CartScreen } from "./src/features/cart/cart.screen";
import { SearchResultScreen } from "./src/components/screens/searchResults.screen";
import { ContactDataScreen } from "./src/components/screens/contact-data.screen";
import { PaymentDataScreen } from "./src/components/screens/paymentData.screen";
import { OrderMadeScreen } from "./src/components/screens/order-made.screen";
import { RegistroExitosoScreen } from "./src/components/screens/registroExitoso.screen";
import { Provider } from "react-redux";
import { store } from "./src/store";

//import {firestoreExport} from 'node-firestore-import-export';

//fonts: oswald y gupter

const Stack = createNativeStackNavigator();

export default function App() {
  //console.log(StatusBar.currentHeight);

  const [oswaldLoaded] = UseOswald({ Oswald_400Regular });
  const [boldOswaldLoaded] = UseBoldOswald({ Oswald_700Bold });
  const [lightOswaldLoaded] = UseLightOswald({ Oswald_300Light });

  if (!oswaldLoaded) {
    return null;
  }

  if (!boldOswaldLoaded) {
    return null;
  }

  if (!lightOswaldLoaded) {
    return null;
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCH_MQ92JKx0Eaf6OgorDoTzLlwucJnlfs",
    authDomain: "bside-1ce58.firebaseapp.com",
    projectId: "bside-1ce58",
    storageBucket: "bside-1ce58.appspot.com",
    messagingSenderId: "856154778631",
    appId: "1:856154778631:web:07e16770e22fda8b038ea2",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  

  return (
    <NavigationContainer>
      <Provider store={store}>
      <CartContextProvider>
      <RemerasContextProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={DrawerNavigation}/>
            <Stack.Screen name="RemerasScreen" component={RemerasScreen}/>
            <Stack.Screen name="OptionsScreen" component={OptionsScreen}/>
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="ContactData" component={ContactDataScreen}/>
            <Stack.Screen name="PaymentData" component={PaymentDataScreen}/>
            <Stack.Screen name="OrderMade" component={OrderMadeScreen}/>
            <Stack.Screen name="RegistroExitoso" component={RegistroExitosoScreen}/>
          </Stack.Navigator>
        </RemerasContextProvider>
      </CartContextProvider>
      </Provider>
    </NavigationContainer>
  );
}
