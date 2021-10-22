import React from "react";
import {View,Text ,StyleSheet} from "react-native";
const Styles =()=>{
    return(
        <View>
        <Text style={styles.red}>
            this is css for background color

        </Text>
        
    </View>
       
        )
  
 

}
const styles=StyleSheet.create({

    red:{
        fontSize:30,
        color:'blue',
        backgroundColor:'green',
        fontWeight:'normal'

    }
})
export default Styles;