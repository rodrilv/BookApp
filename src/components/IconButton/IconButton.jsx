import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IconButton({ionicon, size, onPress}){

    return(
    <TouchableOpacity style={{marginTop: 20}} onPress={onPress}>
        <Ionicons name={ionicon} size={size}></Ionicons>
    </TouchableOpacity>
    )
}