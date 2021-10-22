
//functionbased
import React,{useState} from 'react';
import {Text, View,TextInput,Button} from 'react-native';
const Input=()=>{
    const [value,setValue]=useState();
  

    return(
        <View>
            <Text style={{fontSize:19}}>
               {value}

            </Text>
            <TextInput placeholder={"write anythings "} onChangeText ={text =>setValue(text)}
         
            />
            <Text style={{fontSize:30,color:'red',textAlign:'center'}}>
                {value}
            </Text>
            <Button style={{color:'green'}} title="click me " onPress={()=>{alert(value)}}/>

            
      
            
            
            
    


        </View>
    
    )
}
export default Input
