import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text:'Have Tea', key:'1'},
    {text:'start to work', key:'2'},
    {text:'play on the switch', key:'3'},
    {text:'upload code to git', key:'4'},
  ]);
  
  const clickHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (
    
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list} >
          <FlatList 
            data = {todos}
            renderItem={({item})=>(
              <TodoItem item={item} clickHandler={clickHandler} />
            )}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  },
});
