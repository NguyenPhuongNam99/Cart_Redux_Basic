import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Product from './Product';
import {connect} from 'react-redux';
const Cartscreen =(props)=>{
    return(
        <View style={styles.container}>
            {props.cartItem0.length >0 ?
                <Product onPress={props.removeItem} products={props.cartItem0}/> : <Text>No item in your cart</Text>
            }
        </View>
    )
}
const mapStateToProps =(state)=>{
    return{
        cartItem0:state
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        removeItem: (product)=>dispatch({type:'REMOVE',payload:product})
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Cartscreen);
// const cartItem =useSelector(state =>state)
//     const dispatch = useDispatch();

//     return(
//         <View style={styles.container}>
//             {cartItem.length >0 ?
//                 <Product onPress={(product)=>dispatch({type:'REMOVE',payload:product})} products={cartItem}/> 
//                 : <Text>No item in your cart</Text>
//             }
//         </View>
//     )