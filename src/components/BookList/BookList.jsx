import React, { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { styles } from "./BookList.styles";
import { View, Text, StatusBar, ScrollView, Modal } from "react-native";
import IconButton from "../IconButton";
import placeholder from "../../../assets/placeholder.png";
import UpdateBooksPage from "../../pages/UpdateBookPage";

export default function BookList({
  id,
  title,
  status,
  author,
  description,
  publish_date,
  ISBN,
  image,
  onPress,
  libro,
}) {
  const [modalState, setModalState] = useState(false);
  const options = {
    mediaType: "photo"
  }

  return (
    <View key={id} style={styles.view}>
      <img src={image ? image : placeholder} alt={"placeholder"}></img>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.ISBN}>{ISBN}</Text>
      <Text style={styles.description}>{description}</Text>

      <IconButton
        ionicon={"trash-outline"}
        size={29}
        onPress={() => onPress(id)}
      />
      <View style={{ position: "absolute", left: 125, bottom: 11 }}>
        <IconButton ionicon={"image-outline"} size={29} onPress={ async () =>  await launchImageLibrary()} />
      </View>
      <View style={{ position: "absolute", left: 250, bottom: 11 }}>
        <IconButton
          ionicon={"pencil-outline"}
          size={29}
          onPress={() => setModalState(true)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalState}
        onRequestClose={() => {
          setModalState(!modalState);
        }}
      >
        <IconButton ionicon={"chevron-back-outline"} onPress={() => setModalState(!modalState)} size={40}></IconButton>
        <UpdateBooksPage libro={libro} />
      </Modal>
    </View>
  );
}
