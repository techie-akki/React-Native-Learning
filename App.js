import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Akki');
  const [person,setPerson] = useState({name: 'Anonymous', age: 24});

  const clickHandler = ()=> {
    setName('hey Akki');
    setPerson({name: 'Dhoni', age: 39});
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age} </Text>
      <View style={styles.button}>
        <Button title = 'update state' onPress={clickHandler} />
      </View>
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
  button:{
    marginTop:20,

  }
});
