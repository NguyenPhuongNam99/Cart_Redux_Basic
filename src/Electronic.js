import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {electronic} from '../Data';
import Product from './Product';
import {connect} from 'react-redux';
const Electronic = (props) => {
  
  return (
    <View style={styles.center}>
      <Text>This is the electronic screen</Text>
      <Product products={electronic} onPress={props.addItem} />
    </View>
  );
};
const mapDispatchToProps =(dispatch)=>{
  return {
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

export default connect (null,mapDispatchToProps)(Electronic);