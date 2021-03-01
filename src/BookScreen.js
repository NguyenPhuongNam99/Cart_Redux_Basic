import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {books} from '../Data';
import Product from './Product';
import {connect} from 'react-redux';
const BookScreen = (props) => {
  return (
    <View style={styles.center}>
      <Text >This is the book okscreen</Text>
      <Product products={books} onPress={props.addItem} />
    </View>
  );
};
const mapDispatchToProps =(dispatch)=>{
  return{
    addItem:(product)=>dispatch({type:'ADD',payload:product})
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default connect(null,mapDispatchToProps)(BookScreen);