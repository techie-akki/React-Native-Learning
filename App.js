import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Raj', key: '1'},
    {name: 'Akki', key: '2'},
    {name: 'Anjan', key: '3'},
    {name: 'Vivek', key: '4'},
    {name: 'Gurpreet', key: '5'},
    {name: 'Hardik', key: '6'},
    {name: 'Vineet', key: '7'},
    {name: 'Divesh', key: '8'},
    {name: 'Parth', key: '9'},
    {name: 'Maharsh', key: '10'},
  ]);
  return (
    <View style={styles.container}>
      
      <ScrollView>
        {/* {people.map((item)=>{
          return(
            <View  key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })} refactoring below*/}
        {people.map(item => (
          <View  key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
          
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
  },
  item: {
    marginTop:25,
    padding:20,
    backgroundColor:'tomato',
    fontSize:24,
  }
});
