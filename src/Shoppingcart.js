import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

const  Shoppingcart =(props)=> {
    
         return(
        <View style={{padding:5}}>
            <View style={{
                position:'absolute',height:30,width:30,
                borderRadius:15,backgroundColor:'rgba(95,197,123,0.8',
                right:15,bottom:15,alignItems:'center',
                justifyContent:'center',zIndex:3000
            }}>
                <Text style={{color:'red',fontWeight:'bold',marginTop:29,height:30,width:30,}}>{props.cartItem.length}</Text>
            </View>
                {/* <Icon name="user" size={30} color="green" />             */}
                <TouchableOpacity onPress={()=>props.navigation.navigate('Cartscreen')}>
                    <Text style={{padding:8}}>Cart</Text>
                </TouchableOpacity>
            
           
        </View>
    )
}
const mapStateToProps =(state)=>{
    return {
        cartItem:state
    }
}
export default connect(mapStateToProps)(Shoppingcart);