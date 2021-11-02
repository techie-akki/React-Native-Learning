import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Header(){
  return(
    <View style={styles.header}>
      <Text style={styles.title} >My Todos</Text>

      <StatusBar style='auto' />
    </View>
    
  )
}

const styles = StyleSheet.create({
  header:{
    paddingTop:35,
    height:80,
    backgroundColor:'coral',
  },
  title:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  }
});