import React from "react";
import {ScrollView,View, Text,Button} from "react-native";
const Test=()=>{
    const login =()=>{
        alert("please login first")
    }

    return (
        <View>
            <Text>
                functional components
            </Text>
            {/* <Button title="login" onPress={()=>{
                alert("hi this is function based  component")
            }}/> */}
            <Button title="touched here" onPress={login}/>

        </View>
    )

}
export default Test;