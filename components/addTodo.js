
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTodo({submitHandler}){
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return(
    <View>
      <TextInput
      style={StyleSheet.input}
      placeholder='add new todo..'
      onChangeText={changeHandler} 
      />
      <Button onPress={()=>submitHandler(text)} title ='add todo' color='coral' />
    </View>
  )
}



const styles = StyleSheet.create({
  input:{
    marginBottom:20,
    paddingVertical:6,
    paddingHorizontal:8,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
})