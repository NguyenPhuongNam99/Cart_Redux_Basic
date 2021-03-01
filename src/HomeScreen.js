import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  const goo =()=>{
    props.navigation.navigate('BookScreen');
  }
  return (
    
    <View style={styles.center}>
       <Button title="Go to Book Screen" onPress={()=>navigation.navigate('BookScreen')}/>
      <Button title="Go to Electronic Screen" onPress={()=>navigation.navigate('Electronic')}/>
      <Button title="Go to cart Screen" onPress={()=>navigation.navigate('Cartscreen')}/>
      <Button title="Go to Shoppingcart Screen" onPress={()=>navigation.navigate('Shoppingcart')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default HomeScreen;