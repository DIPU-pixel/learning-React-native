import React,{Component} from "react";
import {View,Text,Button} from "react-native";
class ClassedBased extends Component{
    render()
     {
         return(
            <View>
            <Text style={{fontSize:60}}>
                class component

            </Text>
            <Button title="press" onPress={()=>
            alert("this is class component")}/>
        </View>
         )
    
    }
}
export default ClassedBased;