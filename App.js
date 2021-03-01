import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacknavigation from './src/navigation/Stacknavigation';
import {Provider} from 'react-redux'
import store from './src/store/index';
const App =()=>{
  return(
     <Provider store={store}>
 
     <Stacknavigation />
 
      
    
     </Provider>
   
  )
}
export default App
