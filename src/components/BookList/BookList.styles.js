import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    view:{
      borderWidth: 1,
      borderColor: "#FF89F2",
      borderRadius: 10,
      width: 300,
      margin: 5,
      padding: 12,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    author:{
        fontSize: 15,
    },
    ISBN: {
        fontSize: 10, 
        textAlign: "right"
    },
    description: {
        fontSize: 16, 
        fontStyle: "italic"
    },
    status1: {
        fontSize: 14,
        textAlign: "right",
        color: "green"
    },
    status0 : {
        fontSize: 14,
        textAlign: "right",
        color: "red"
    },
    date: {
        fontSize: 11,
        fontStyle: "normal"
    },
    image: {
        alignContent: "center",
        width: 150,
        height: 100
    }
    
});