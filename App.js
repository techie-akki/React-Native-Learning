import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Helle, Newbie!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Welcome to <Text>React Native</Text> Tutorial.</Text>
        <Text>Welcome to React Native Tutorial.</Text>
        <Text>Welcome to React Native Tutorial.</Text>
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
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    margin:20,
    backgroundColor:'yellow',
    padding:20,
  }
});
