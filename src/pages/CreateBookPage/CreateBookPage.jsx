import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Text, View, TextInput, Button, Picker } from "react-native";
import { styles } from "./CreateBook.styles";
import { create, onCreate } from "../../services/books";
import i18n from "../../localization/i18n";

export default function CreateBook({}) {
  const [book, setBook] = useState({
    title: null,
    status: null,
    author: null,
    description: null,
    publish_date: null,
    ISBN: null,
  });

  const onBookCreated = () => {
    console.log("Se ha creado un libro");
  };

  const addBook = () => {
    create(book);
  };

  useEffect(() => {
    let subscription;
    (async function subscribe() {
      subscription = await onCreate(onBookCreated);
    })();
    return () => {
      subscription?.unsubscribe();
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>{i18n.t("create-book-welcome")}</Text>
      <TextInput
        onChangeText={(text) => {
          setBook((current) => ({ ...current, title: text }));
        }}
        style={styles.input}
        placeholder="Book Title"
      />
      <Picker
        selectedValue={book.status}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => {
          setBook((current) => ({ ...current, status: itemValue }));
        }}
      >
        <Picker.Item label={"Disponible"} value={"Disponible"} />
        <Picker.Item label={"No Disponible"} value={"No Disponible"} />
      </Picker>
      <TextInput
        onChangeText={(text) => {
          setBook((current) => ({ ...current, author: text }));
        }}
        style={styles.input}
        placeholder="Author"
      />
      <TextInput
        onChangeText={(text) => {
          setBook((current) => ({ ...current, description: text }));
        }}
        style={styles.input}
        placeholder="Description"
      />
      <TextInput
        onChangeText={(text) => {
          setBook((current) => ({ ...current, publish_date: text }));
        }}
        style={styles.input}
        placeholder="Publish Date"
      />
      <TextInput
        onChangeText={(text) => {
          setBook((current) => ({ ...current, ISBN: text }));
        }}
        style={styles.input}
        placeholder="ISBN"
      />
      <Button title={i18n.t("button-save")} onPress={addBook} />
    </View>
  );
}
