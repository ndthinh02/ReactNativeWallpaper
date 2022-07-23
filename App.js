import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import main from "./components/main";
import ScreenTwo from "./components/ScreenTwo";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen 
        
        name="main"
        component = {main}
       ></Stack.Screen>
         <Stack.Screen 
        name="ScreenTwo"
        component = {ScreenTwo}
       ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
