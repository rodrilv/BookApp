import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Text, View, TextInput, Button } from "react-native"
import { styles } from "./CreateBook.styles";
import { create, onCreate } from '../../services/books'

export default function CreateBook({}){

    const [book, setBook] = useState({
        "title": null,
        "status": null,
        "author": null,
        "description": null,
        "publish_date": null,
        "ISBN": null
    })

    const onBookCreated = () =>{
        console.log("Se ha creado un libro");
    }

    const addBook = () => {
        create(book);
    }

    useEffect( () =>{
        let subscription;
        (async function subscribe(){
            subscription = await onCreate(onBookCreated)
        })();
        return () => {
            subscription?.unsubscribe();
        }
    })
   
    return(
        <View style={styles.container}>
            <StatusBar />
            <Text>Welcome To Create Book Screen</Text>
            <TextInput
                onChangeText={(text) =>{
                    setBook((current) => ({... current, title: text}))
                }}
                style={styles.input}
                placeholder="Book Title"
            />
            <TextInput
                onChangeText={(text) =>{
                    setBook((current) => ({... current, status: text}))
                }}
                style={styles.input}
                placeholder="Status"
            />
            <TextInput
            onChangeText={(text) =>{
                setBook((current) => ({... current, author: text}))
            }}
                style={styles.input}
                placeholder="Author"
            />
            <TextInput
            onChangeText={(text) =>{
                setBook((current) => ({... current, description: text}))
            }}
                style={styles.input}
                placeholder="Description"
            />
            <TextInput
            onChangeText={(text) =>{
                setBook((current) => ({... current, publish_date: text}))
            }}
                style={styles.input}
                placeholder="Publish Date"               
            />
            <TextInput
            onChangeText={(text) =>{
                setBook((current) => ({... current, ISBN: text}))
            }}
                style={styles.input}
                placeholder="ISBN"
            />
            <Button title="Save Book" onPress={addBook} />
            
        </View>
        )
}
