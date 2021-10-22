import React from 'react';
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';
class FromusingCls extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'',
            password:'',
            address:'',
            
        }
        
    }
    submit =()=>{
        console.warn(this.state)
 
    }

    render(){
        return (
            <View>
                <TextInput placeholder="enter your name"
                onChangeText={(text)=>{this.setState({name:text})}}
                style={styles.textBox}
                  
                
                >

                </TextInput>
                <TextInput placeholder="enter your password"
                onChangeText={(text)=>{this.setState({name:text})}}
                style={styles.textBox}
                secureTextEntry={true}
                  
                  >

                  </TextInput>
                  <TextInput placeholder="enter your address"
                onChangeText={(text)=>{this.setState({name:text})}}
                style={styles.textBox}
              
                  
                
                >

                </TextInput>
                <Button title="Submit " onPress={()=>{this.submit()}}/>
            
             
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    textBox: {
        borderColer:'skyblue',
        borderWidth:2,
        padding:10,
        marginHorizontal:20,
        marginVertical:25,
    }
})
export default FromusingCls;