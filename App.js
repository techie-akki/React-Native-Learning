import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Raaja', id: '1'},
    {name: 'Akkii', id: '2'},
    {name: 'Anjan', id: '3'},
    {name: 'Vivek', id: '4'},
    {name: 'Gurpit', id: '5'},
    {name: 'Hardik', id: '6'},
    {name: 'Vineet', id: '7'},
    {name: 'Divesh', id: '8'},
    {name: 'Parth', id: '9'},
    {name: 'Mehar', id: '10'},
  ]);
  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item})=>(
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      
      {/* <ScrollView>
        {people.map(item => (
          <View  key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>  
        ))}
      </ScrollView> */}

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
    padding:30,
    backgroundColor:'tomato',
    fontSize:24,
    marginHorizontal:12,    
  }
});
