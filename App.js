import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

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
    });
  }

  const submitHandler =(text) => { 

    if(text.length > 3){
      setTodos((prevTodos) =>{
        return [
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ]
      });
    }else{
      Alert.alert('OOPS!', 'Todos must me geater than 3 characters',[
        {text:'Re-try', onPress:()=> console.log('alert closed')}
      ])
    }
    
  }
  

  return (
    // <Sandbox />




    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard')
      }}>
      <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <AddTodo submitHandler={submitHandler}/>
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
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    flex:1,
    // backgroundColor:'pink',
    padding:40,
  },
  list:{
    flex:1,
    marginTop:20,
    // backgroundColor:'yellow',
  },
});
