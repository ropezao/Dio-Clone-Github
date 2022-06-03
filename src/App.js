import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar,Text, Pressable , Linking} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
const colorGithub = "#010409";
const imageGithub ='https://avatars.githubusercontent.com/u/97926394?v=4';
const ToMyGithub = 'https://github.com/ropezao';
const App = () => { 
        const handleGoToGithub = async ()=>{
         const res =  await Linking.canOpenURL( ToMyGithub);
         if(res) {
            Linking.openURL( ToMyGithub);
         }
        }
        return (
        <SafeAreaView style={style.container}>
     
     <StatusBar barStyle= 'light-content' 
                backgroundColor= {colorGithub}/>
    <View style={style.content}>
    
    <Image
      accessibilityLabel="imagem :Rodrigo Ramalho"
      style ={style.avatar} source={{uri: imageGithub}}
        
        />  
    <Text accessibilityLabel="nome :Rodrigo Ramalho"style={[style.defaultText, style.nome]}>Rodrigo Ramalho</Text>
    <Text accessibilityLabel="nikeName :Rodrigo Ramalho"style={[style.defaultText, style.nikeName]}>cordazao</Text>
    <Text accessibilityLabel="descrição :Rodrigo Ramalho"style={[style.defaultText,style.description]}>Analista de Sistemas| Azure | C#</Text>
    <Pressable onPress={handleGoToGithub}>
    <View style= {[style.botton,]}>
        <Text style = {style.textbotton}>Opem in GitHub </Text>
    </View>
    </Pressable>
    </View>
        </SafeAreaView>
    )
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor:'#010409', flex : 1,
        justifyContent:'center',
    },
    content: {
        alignItems:'center',
        padding:20,

    },
    avatar: {
        height:200,
        width:200,
        borderRadius:100,
        borderColor: 'white',
        borderWidth: 2,

    },
    defaultText:{
        color:'#c9d1d9'

    },
     nome:{
         marginTop:20,
         fontWeight:'bold',
         fontSize:24,
     },     
     nikeName:{
         fontWeight:'bold',
         fontSize:18,
         color: '#4f565e',
     },
     description:{
       fontSize:14,
       fontWeight:'bold',

     },
     botton:{
         marginTop:20,
         backgroundColor:'#4f565e',
         borderRadius:10,
         padding:20,
     },
     textbotton:{
        fontSize: 10,
        fontWeight:'bold',
        color:'#c9d1d9',

     },
});





