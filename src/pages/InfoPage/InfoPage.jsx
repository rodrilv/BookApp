import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./Info.styles";
import { Auth } from "aws-amplify";

export default function InfoPage({onPress, state}) {
  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <View style={styles.container}>
      <Text>{state.attributes.email}</Text>
      <View style={{ margin: 12, width: 200}}>
        <Button title="Sign Out" onPress={logout}></Button>
      </View>
    </View>
  );
}
