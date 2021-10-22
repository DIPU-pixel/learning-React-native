import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Test from './Componet/Test';
import ClassedBased from './Componet/ClassedBased';

import Styles from './Componet/Styles';
import Input from './Componet/Input';
import FromusingCls from './Componet/FromusingCls';
import FromusingFun from './Componet/fromusingFun';
import PopUp from './Componet/PopUp';
import Useeffct from './Componet/Useeffct';
import ApiFetching from './Componet/ApiFetching'


const App = () => {
  const data= "some data";
  return (
    <ScrollView>

      <View>
        <Text style={{fontSize:80}}>
          hiidfghjk
        </Text>
        <ApiFetching/>

        {/* <Useeffct/> */}
    
    
        {/* <PopUp/> */}
        {/* <FromusingFun/> */}
        {/* <FromusingCls/> */}
        {/* <Input/> */}
        
        {/* <ClassedBased/> */}

        
        {/* <Test /> */}
        {/* <Text> Try editing me! 🎉</Text>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
          defaultValue="You  type in me" />
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
          }}
          style={{ backgroundColor: 'red', width: 400, height: 200 }}
        />
        <Image source={{
          uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
        }}
          style={{ width: 400, height: 200 }}
        />



 */}

     {/* <Props data={data}/> */}



      </View>
    </ScrollView>
  );

};
export default App;
