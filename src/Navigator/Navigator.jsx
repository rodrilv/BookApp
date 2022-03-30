
//Test Features
import { Text } from "react-native";
//Main Features
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
//Context
import { GlobalContext } from "../context/global/global.context";
//Options for Tab Navigator
const options = ({route}) => ({
    tabBarIcon: ({focused, color, size}) =>{
      let iconName;
  
      if(route.name === "Home"){
        iconName = focused
        ? "home-outline"
        : "home-outline"
      } else if(route.name === "Create Book"){
        iconName = "ios-list"
      } else if(route.name === "Info"){
          iconName = "ios-information-circle"
      }
      return <Ionicons name={iconName} size={size} color={color} />
    },
    tabBarActiveTintColor: "#00ADE0",
    tabBarInactiveTintColor: "gray",
  });
//Pages To Import
import HomePage from "../pages/HomePage";
import CreateBook from "../pages/CreateBookPage";
import InfoPage from "../pages/InfoPage";
//Bottom Tab & Stack Navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Main Component exported

export default function MainNavigator({}){
  const { logout, state } = useContext(GlobalContext);
  
    return(
        <NavigationContainer>
           <Tab.Navigator screenOptions={options}>
                <Tab.Screen name="Home" 
                children={(props) => (<HomePage />)} />
                <Tab.Screen name="Create Book" component={CreateBook} />
                <Tab.Screen name="Info" 
                children={(props) => (<InfoPage onPress={logout} state={state}/>)} />
           </Tab.Navigator>
        </NavigationContainer>
    )
}


