import React, { useState, useRef, useEffect} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useFonts as UseOswald, Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useNavigation, useRoute} from "@react-navigation/native";
import styled from "styled-components/native";
import { DrawerSubMenu } from "./drawer-submenu.component";
import { HomeScreen } from "../../../components/screens/home.screen";

const ItemParameters = {
  fontFamily: "Oswald_400Regular",
  fontSize: 20,
  left: 0,
};

export const DrawerContent = (props) => {
  const [oswaldLoaded] = UseOswald({ Oswald_400Regular });

  const firstItemDrawerContent = [{title: "Ver todos los productos", navigateTo: "Productos"},
                                  {title: "Hombre", navigateTo:"RopaHombre"},
                                  {title:"Mujeres", navigateTo:"RopaMujer"}];
  const secondItemDrawer = [{title: "Preguntas Frecuentes", navigateTo: "PreguntasFrecuentes"}, 
                            {title: "Informacion y tabla de talles", navigateTo:"InformacionTabla"},
                            {title: "Politica de Cambios y devoluciones",navigateTo:"CambiosYDevoluciones"}, 
                            {title: "Terminos y condiciones de venta", navigateTo: "TerminosyCondiciones"}, 
                            {title: "Politicas de privacidad", navigateTo:"PoliticasDePrivacidad"}]

  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.name);
  const handleNavigation = (navigationRoute) => {
      navigation.navigate(navigationRoute);
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="HOME"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => handleNavigation("Home")}
          />
          <DrawerItem
            label="QUIENES SOMOS"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => handleNavigation("Quienes Somos")}
          />
          <DrawerItem
            label="¿COMO COMPRAR?"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => console.log("¿Como Comprar")}
          />
          <DrawerSubMenu title="PRODUCTOS" items={firstItemDrawerContent}/>
          <DrawerSubMenu title="+INFO" items={secondItemDrawer}/>
          <DrawerItem
            label="PRENSA"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => console.log("Prensa")}
          />
          <DrawerItem
            label="CONTACTO"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => console.log("Contacto")}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          label="Iniciar Sesion"
          onPress={() => console.log("Iniciar Sesion")}
        />
        <Drawer.Item
          label="Registrarse"
          onPress={() => console.log("Registrarse")}
        />
      </Drawer.Section>
    </View>
  );
};

const SubMenuSection = styled(Drawer.Section)`
  background-color: #88ab59;
`;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  text: {
    color: "red",
  },
  section: {
    marginBottom: 50,
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
  },
  bottomDrawerSection: {
    flex: 0.2,
    marginBottom: 0,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    backgroundColor: "white",
  },
  viewStyle: {
    position: 'absolute', 
    right: 5
  }
});
