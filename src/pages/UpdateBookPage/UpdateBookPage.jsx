import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
  Picker,
} from "react-native";
import { styles } from "./UpdateBook.styles";
import { Update, onUpdate } from "../../services/books";
import i18n from "i18n-js";

export default function UpdateBooksPage({ libro }) {
  const [book, setBook] = useState({
    id: libro.id,
    status: libro.status,
    title: libro.title,
    author: libro.author,
    description: libro.description,
    publish_date: libro.publish_date,
    ISBN: libro.ISBN,
  });
  const update = (book) => {
    Update(book);
  };
  const onBookUpdated = () => {
    console.log("Se actualizó el libro");
  };
  useEffect(() => {
    let subscription;
    (async function subscribe() {
      subscription = await onUpdate(onBookUpdated);
    })();
    return () => {
      subscription?.unsubscribe();
    };
  });
  return (
      
      <View style={styles.container}>
        <StatusBar />
        <Text>{i18n.t("update-book-welcome")}</Text>
        <TextInput
          onChangeText={(text) => {
            setBook((current) => ({ ...current, title: text }));
          }}
          style={styles.input}
          placeholder={book.title}
        />
        <Picker
          selectedValue={book.status}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => { setBook((current) => ({...current, status: itemValue})) }}

        >
          <Picker.Item label={"Disponible"} value={"Disponible"} />
          <Picker.Item label={"No Disponible"} value={"No Disponible"} />
        </Picker>
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
            setBook((current) => ({ ...current, publish_date: text }));
          }}
          style={styles.input}
          placeholder={book.publish_date}
        />
        <TextInput
          onChangeText={(text) => {
            setBook((current) => ({ ...current, ISBN: text }));
          }}
          style={styles.input}
          placeholder={book.ISBN}
        />
        <Button title={i18n.t("button-save")} onPress={() => update(book)} />
      </View>
  );
}
