import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Text, View, Button, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./HomePage.styles";
import { list } from "../../services/books";
import { Delete, onDelete } from "../../services/books";
import IconButton from "../../components/IconButton";
import BookList from "../../components/BookList";
import { Alert } from "react-native";
import i18n from "../../localization/i18n";

export default function HomePage({}) {
  const [libros, setLibros] = useState([]);

  async function listBooks() {
    //console.log("I AM THE BEST")
    const booksFetched = await list();
    if (booksFetched) setLibros(booksFetched);
  }

  const delBooks = (item) => {
    Delete(item);
    //Alert.alert("Book Deleted Successfully");
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
        <Text style={{marginTop: 5, marginBottom: 5}}>{i18n.t("books_available")}</Text>
        <ScrollView style={styles.scrollView}>
          
          {libros ? (
            libros.map((libro, index) => (
              <BookList
                key={index}
                id={libro.id}
                title={libro.title}
                status={libro.status}
                author={libro.author}
                description={libro.description}
                publish_date={libro.publish_date}
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
