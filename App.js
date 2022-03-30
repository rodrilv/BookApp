import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { StatusBar } from 'expo-status-bar';
import MainNavigator from './src/Navigator';
import { GlobalProvider } from './src/context/global/global.context';
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

function App({authData}) {
  //console.log(authData)
  return (
    <GlobalProvider authData={authData}>
      <MainNavigator />
    </GlobalProvider>
  );
}
export default withAuthenticator(App);