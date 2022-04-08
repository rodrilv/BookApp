import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
} from "react-native";
import { styles } from "./UpdateBook.styles";
import { Update, onUpdate } from "../../services/books"

export default function UpdateBooksPage({ libro }) {
  const [book, setBook] = useState({
    id: libro.id,
    title: libro.title,
    author: libro.author,
    description: libro.description,
    ISBN: libro.ISBN,
  });
  const update = (book) => {
      Update(book)
  };
  const onBookUpdated = () =>{
      console.log("Se actualizó el libro");
  }
  useEffect( () =>{
    let subscription;
    (async function subscribe(){
        subscription = await onUpdate(onBookUpdated)
    })();
    return () => {
        subscription?.unsubscribe();
    }
})
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <StatusBar />
        <Text>Welcome To Update Book Screen</Text>
        <TextInput
          onChangeText={(text) => {
            setBook((current) => ({ ...current, title: text }));
          }}
          style={styles.input}
          placeholder={book.title}
        />
        <TextInput
          onChangeText={(text) => {
            setBook((current) => ({ ...current, author: text }));
          }}
          style={styles.input}
          placeholder={book.author}
        />
        <TextInput
          onChangeText={(text) => {
            setBook((current) => ({ ...current, description: text }));
          }}
          style={styles.input}
          placeholder={book.description}
        />
        <TextInput
          onChangeText={(text) => {
            setBook((current) => ({ ...current, ISBN: text }));
          }}
          style={styles.input}
          placeholder={book.ISBN}
        />
        <Button title="Update Book" onPress={() => update(book)} />
      </View>
    </SafeAreaView>
  );
}
