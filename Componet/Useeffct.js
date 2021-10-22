import React,{useEffect,useState} from 'react';
import {View,Text,Button} from 'react-native';
const Useeffct =()=>{
    const [count,setCount]=useState(1);
    const [data,setData]=useState("intial data");
     useEffect(()=>{
         console.warn("test111111111111",count)
         if(count==8){
             setData("wait!!!!!!!!!!!")
         }else if(count<=7){
             setData("okkkkkkkkkkkkk")
         }
        
    })
    return(

        <View>
            <Text style={{fontSize:30}}>
                hi
                </Text>
                <Text>
                    {count}
                </Text>
                <Text>
                    {data}

                    </Text>
                <Button title="increment" onPress={()=>{setCount(count+1)}}/>
                <Button title="decrement" onPress={()=>{setCount(count-1)}}/>
                

        

        </View>
        )
}
export default Useeffct