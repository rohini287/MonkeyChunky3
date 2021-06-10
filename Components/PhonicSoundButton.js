import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import {Audio} from 'expo-av';
export default class PhonicSoundButton extends React.Component{
    playSound = async soundChunk=>{
        var link='https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync(
            {uri:link},
            {shouldPlay:true}
        
        )
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.chunkB} onPress={()=>{
                    this.playSound(this.props.soundChunk)
                }}>
                    <Text style={styles.displayText}> 
                        {this.props.wordChunk}
                    </Text>
                </TouchableOpacity>
                </View>
        )
    }
}
const styles=StyleSheet.create({
    displayText:{
        textAlign:'center',
        fontSize:30,
        color:'white'
      },
      chunkB:{
        width:100,
        margin:5,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'red'
      }
})