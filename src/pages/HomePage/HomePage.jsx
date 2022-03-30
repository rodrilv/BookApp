import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Text, View, FlatList } from "react-native"
import { styles } from "./HomePage.styles";
import { list } from "../../services/books";

const DATA = [
    {
        id: 1,
        title: "El Rey León",
        author: "Pixar"
    },
    {
        id: 2,
        title: "La Cenicienta",
        author: "Pixar"
    },
    {
        id: 3,
        title: "Toy Story",
        author: "Pixar"
    },
    {
        id: 4,
        title: "Bichos",
        author: "Pixar"
    },
    {
        id: 5,
        title: "Pollitos en Fuga",
        author: "Pixar"

    }
];

const Item = ({title, author, description, ISBN}) => (
    <View style={{ borderWidth: 1,borderColor: "#FF89F2", borderRadius: 10, width: 300, margin: 5, padding: 12}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>{title}</Text>
        <Text style={{fontSize: 16}}>{author}</Text>
        <Text style={{fontSize: 10, textAlign: "right"}}>{ISBN}</Text>
        <Text style={{fontSize: 16, fontStyle: "italic"}}>{description}</Text>

    </View>
    
);

export default function HomePage({}){

    const [libros, setLibros] = useState([]);

    async function listBooks(){
        const booksFetched = await list();
        if(booksFetched) setLibros(booksFetched);
    }

    useEffect(() =>{
        listBooks();
    })

    const renderItem = ({item}) => (
        <Item title={item.title} author={item.author} description={item.description} ISBN={item.ISBN}></Item>
    ); 

    return(
    <View style={styles.container}>
        <StatusBar />
        <Text>Welcome To Home Screen</Text>
        <FlatList
            data={libros}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        ></FlatList>
    </View>
    )
}