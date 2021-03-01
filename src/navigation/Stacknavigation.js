import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../HomeScreen';
import BookScreen from '../BookScreen';
import Shoppingcart from '../Shoppingcart';
import Electronic from '../Electronic';
import Cartscreen from '../Cartscreen';
const Stack = createStackNavigator();
import { NavigationContainer } from "@react-navigation/native";
// ,headerRight:(<Shoppingcart/>
const Stacknavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitle:'HE'}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="BookScreen" component={BookScreen} />
      <Stack.Screen name="Electronic" component={Electronic} />
      <Stack.Screen name="Shoppingcart" component={Shoppingcart} />
      <Stack.Screen name="Cartscreen" component={Cartscreen} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  Stacknavigation;