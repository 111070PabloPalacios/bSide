import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawer.content";
import { HomeScreen } from "../../../components/screens/home.screen";
import { QuienesSomos } from "../../../components/quienes-somos/quienes-somos.component";
import { SearchResultScreen } from "../../../components/screens/searchResults.screen";
import { ComoComprarScreen } from "../../../components/screens/comoComprar.screen";
import { RegistrarseScreen } from "../../../components/screens/registrarse.screen";
import { IniciarSesionScreen } from "../../../components/screens/iniciarSesion.screen";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return(
        <Drawer.Navigator useLegacyImplementation={true} 
        drawerContent={props => <DrawerContent {...props}/>}
        screenOptions={
            {headerShown: false,
            drawerStyle:{
              backgroundColor: '#8cc63e',
              flex: 1},}}>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Quienes Somos" component={QuienesSomos}/>
            <Drawer.Screen name="Como Comprar" component={ComoComprarScreen}/>
            <Drawer.Screen name="Registrarse" component={RegistrarseScreen}/>
            <Drawer.Screen name="Iniciar Sesion" component={IniciarSesionScreen}/>
            <Drawer.Screen name="SearchResult" component={SearchResultScreen}/>
          </Drawer.Navigator>
    );
}