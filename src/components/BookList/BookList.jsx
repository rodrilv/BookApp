import React, { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { styles } from "./BookList.styles";
import { View, Text, StatusBar, ScrollView, Modal, Image } from "react-native";
import IconButton from "../IconButton";
import placeholder from "../../../assets/placeholder.png";
import UpdateBooksPage from "../../pages/UpdateBookPage";
import i18n from "../../localization/i18n";

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
      
      {image ? 
        <Image style={styles.image} source={image}></Image> : <Image style={styles.image} source={placeholder}></Image>}
      
      {status == "Disponible" &&
       <Text style={styles.status1}>{i18n.t("nestedOptions.opt1")}</Text> 
      }
      {status == "No Disponible" &&
        <Text style={styles.status0}>{i18n.t("nestedOptions.opt2")}</Text>
      }
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.ISBN}>{ISBN}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{publish_date}</Text>

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
