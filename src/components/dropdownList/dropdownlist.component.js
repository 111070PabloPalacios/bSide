import React, {useState} from "react";
import { ScrollView, TouchableOpacity, SafeAreaView,Text } from "react-native";
import { Overlay } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

export const DropdownList = ({data}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
      {label: 'Banana', value: 'banana'},
    ]);
  
    return (
      <DropDownPicker
        open={open}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
        placeholder={data[0].label}
        style={{borderRadius: 0, marginTop: 12, borderColor: '#9f9f9f', borderWidth: 2}}
      />
    );
}