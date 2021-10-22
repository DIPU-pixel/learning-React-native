import React, { useState } from 'react';
import {View,Text,TextInput,Button} from 'react-native';
const FromusingCls=()=>{
    const [value,setValue]=useState();
    return(
        <View>
            <Text>
                login from
            </Text>
            <TextInput placeholder="Enter Your Name" 
            onChangeText={(value)=>setValue(value)}>
                
                </TextInput>
                <TextInput placeholder="Enter Your Password" 
                 secureTextEntry={true}
                 onChangeText={(value)=>setValue(value)}
                >
                    
                </TextInput>
                <TextInput placeholder="Enter Your MAil"
                onChangeText={(value)=>setValue(value)}>
                </TextInput>

                <Button title="submitted" onPress={()=>{alert(value)}}

                >
                    {value}
                </Button>
               



        

        </View>
        )
};
export default FromusingCls;

