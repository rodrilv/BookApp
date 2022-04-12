import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import MainNavigator from './src/Navigator';
import { GlobalProvider } from './src/context/global/global.context';
import awsconfig from "./src/aws-exports";
import { LogBox } from 'react-native';

;

Amplify.configure(awsconfig);

function App({authData}) {
  //console.log(authData)
  LogBox.ignoreLogs(['Setting a timer'])
  return (
    <GlobalProvider authData={authData}>
      <MainNavigator />
    </GlobalProvider>
  );
}
export default withAuthenticator(App);