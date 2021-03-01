import React,{useState} from 'react';
import {View,Text, Button,alert,Image} from 'react-native';

const Product =(props)=>{
    // const [people,setPeople]= useState(products);
    return(
        // <Text>hello</Text>
        <View>
       { props.products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 ,flexDirection:'row',justifyContent:'space-evenly'}}>
                    <Image source={{uri:item.img}} style={{ width: 50,height: 50,backgroundColor:'red',paddingTop:3}}/>
                    <Button onPress={()=>props.onPress(item) }  title={item.title + " - " + item.price} style={{width: 130,height: 130}}/>
                    
                </View>
            )
        })
    }
    </View>
    )
}
export default Product;