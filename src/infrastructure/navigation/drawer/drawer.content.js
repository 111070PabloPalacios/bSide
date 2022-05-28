import React, {useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useFonts as UseOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute} from "@react-navigation/native";
import styled from "styled-components/native";
import { DrawerSubMenu } from "./drawer-submenu.component";
import { onLogout, getUserData } from "../../../store/authenticationSlice";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const ItemParameters = {
  fontFamily: "Oswald_400Regular",
  fontSize: 20,
  left: 0,
};

export const DrawerContent = (props) => {
  const [oswaldLoaded] = UseOswald({ Oswald_400Regular });

  const firstItemDrawerContent = [{title: "Hombre", navigateTo:"RopaHombre"},
                                  {title:"Mujer", navigateTo:"RopaMujer"}];
  const secondItemDrawer = [{title: "Preguntas Frecuentes", navigateTo: "PreguntasFrecuentes"}, 
                            {title: "Informacion y tabla de talles", navigateTo:"InformacionTabla"},
                            {title: "Politica de Cambios y devoluciones",navigateTo:"CambiosYDevoluciones"}, 
                            {title: "Terminos y condiciones de venta", navigateTo: "TerminosyCondiciones"}, 
                            {title: "Politicas de privacidad", navigateTo:"PoliticasDePrivacidad"}]

  const navigation = useNavigation();
  const handleNavigation = (navigationRoute) => {
      navigation.navigate(navigationRoute);
  }
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
  const user = useSelector(state => state.authentication.userData);

  if(user){
    console.log(user["nombre"]);
  }

  return (
    <>
      <DrawerContentScrollView {...props} style={{flex: 1}}>
          <DrawerItem
            label="HOME"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => handleNavigation("Home")}
            icon={() => <FontAwesome5 name="home" size={20} style={{color:'white'}}/>}
          />
          <DrawerItem
            label="QUIENES SOMOS"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => handleNavigation("Quienes Somos")}
            icon={() => <MaterialCommunityIcons name="account-question" size={20} style={{color:'white'}}/>}
          />
          <DrawerItem
            label="¿COMO COMPRAR?"
            inactiveTintColor="white"
            labelStyle={ItemParameters}
            onPress={() => handleNavigation("Como Comprar")}
            icon={() => <FontAwesome5 name="money-bill-wave" size={20} style={{color:'white'}}/>}
          />
          <DrawerSubMenu title="PRODUCTOS" items={firstItemDrawerContent}/>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
      {!isAuthenticated ? (
          <>
            <Drawer.Item
            label="Iniciar Sesion"
            onPress={() => handleNavigation("Iniciar Sesion")}
            />
            <Drawer.Item
            label="Registrarse"
            onPress={() => handleNavigation("Registrarse")}
            />
          </>
        ) : (
            <>
              <Drawer.Item
              label={"Bienvenido/a " + user["nombre"] + "!"}
              />
              <Drawer.Item
              label="Cerrar sesion"
              onPress={() => dispatch(onLogout())}
              />
            </>
        )}
      </Drawer.Section>
    </>
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
    marginBottom: 50,
    borderBottomColor: "red",
    borderBottomWidth: 0,
  },
  bottomDrawerSection: {
    marginBottom: 0,
    paddingBottom: 1,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    backgroundColor: "white",
  },
  viewStyle: {
    position: 'absolute', 
    right: 5
  }
});
