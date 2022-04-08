import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Text, View, Button, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./HomePage.styles";
import { list } from "../../services/books";
import { Delete, onDelete } from "../../services/books";
import IconButton from "../../components/IconButton";
import BookList from "../../components/BookList";
import { Alert } from "react-native";

export default function HomePage({}) {
  const [libros, setLibros] = useState([]);

  async function listBooks() {
    //console.log("I AM THE BEST")
    const booksFetched = await list();
    if (booksFetched) setLibros(booksFetched);
  }

  const delBooks = (item) => {
    Delete(item);
    Alert.alert("Book Deleted Successfully");
  };

  const onBookDeleted = () => {
    console.log("Se eliminó el libro");
  };

  useEffect(() => {
    listBooks();
  });

  useEffect(() => {
    let subscription;
    (async function subscribe() {
      subscription = await onDelete(onBookDeleted);
    })();
    return () => {
      subscription?.unsubscribe();
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar />
        <Text style={{marginTop: 5, marginBottom: 5}}>Libros Disponibles</Text>
        <ScrollView style={styles.scrollView}>
          
          {libros ? (
            libros.map((libro, index) => (
              <BookList
                key={index}
                id={libro.id}
                title={libro.title}
                author={libro.author}
                description={libro.description}
                ISBN={libro.ISBN}
                onPress={delBooks}
                libro={libro}
              />
            ))
          ) : (
            <Text>Nothing to Show :/</Text>
          )}
        </ScrollView>
      </View>
  );
}
