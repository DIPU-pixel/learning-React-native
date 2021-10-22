import React,{useState,useEffect} from 'react';

import {View,Text,SafeAreaView,FlatList,ActivityIndicator,StyleSheet, TextInput} from 'react-native';
const ApiFetching=()=>{
    const movieURl="https://reactnative.dev/movies.json";
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const [title,setTitle]=useState([]);

    useEffect(()=>{
        fetch(movieURl)
        .then((response) => response.json())
        .then((json)=> 
        {setData(json.movies);
            setTitle(json.title)
        })
        
        .catch((error)=> alert(error))
        .finally(setLoading(false));
      
    })


    return(
           <SafeAreaView style={styles.container}>
               {isLoading ?<ActivityIndicator/> :(
                   <View>
                       <Text>
                           {title}
                           </Text>
               <FlatList 
                  data={data}
                  keyExtractor={ ({id}, index)=>id}
                  renderItem={({item})=>{
                      return(
                        <Text>
                            {item.title},
                            {item.releaseYear}


                        </Text>  
                        )
                  }}
               />
               </View>)}
               {data}
               

           </SafeAreaView>
           
        )

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"center",
        justifyContent:"center",
    }
})
export default ApiFetching;