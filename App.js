import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('Akki');
  const [age,setAge] = useState('24');


  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline 
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={(val)=> setName(val)}     
     />
     <Text>Enter Age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='Enter your age'
        onChangeText={(val)=> setAge(val)}     
     />

      <Text>Name:{name}, Age:{age} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor: 'tomato',
    padding:8,
    margin:10,
    width:200,
  }
});
