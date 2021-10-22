import React, { Component } from 'react';
import {View,Text,Modal,Button} from 'react-native';

export default class componentName extends Component {
  constructor()
  {
    super();
    this.state={
      show: false
    }
  }
  render() {
    return (
         <View style={{flex:1, marginTop:100}}>
             <Text style={{fontSize:80}}>
                 Normal  Text

             </Text>
             <Button title="show" onPress={()=>{this.setState({show:true})}}/>
            <Modal transparent={true}
            visible={this.state.show}
            
            >
              

              <View style={{backgrounColor:"#242582",flex:1}}>
                  <View style={{backgroundColor:"#ffffff",margin:50,padding:40,borderRadius:10,flex:1}}>
                  <Text style={{fontSize:50}}>
                     Modal Text

                      </Text>
                      <Button title="closed show" onPress={()=>{this.setState({show:false})}}/>
                      </View>
           

              </View>

          
            </Modal>


         </View>
    );
  }
}
