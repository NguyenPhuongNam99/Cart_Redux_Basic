import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect,useSelector,useDispatch } from 'react-redux'

const Acount =(props)=>{
    // const counter = useSelector(state =>state.counter)
    // const dispatch = useDispatch();

    return(
        <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => dispatch({type:'INCRESE'})}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{counter}</Text>
                    <TouchableOpacity onPress={() => dispatch({type:'DECRESE'})}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const mapStateToProps =(state)=>{
    return{
        counter:state.counter
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        increaseCounter:()=>dispatch({type:"INCRESE"}),
        decreaseCounter:()=>dispatch({type:"DECRESE"})
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Acount) 