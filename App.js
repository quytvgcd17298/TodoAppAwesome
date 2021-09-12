import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [ text, setText] = useState("");
  const [ tasks, setTasks] = useState([]);
  const handleButton = () => {
    setTasks([...tasks, text]);
    setText("");
  };
  return (
    <View style={styles.container}>
      <View style = {styles.item}>
      <Text style = {{ fontSize: 24}}>Today Tasks !</Text>
      </View>
      <View>
        {tasks.map((task,index) => {
        return (
          <TouchableOpacity
          key = {index}>
          <Task text = {task}></Task>
          </TouchableOpacity>
        )})}
      </View>

      <KeyboardAvoidingView
      style = {styles.addTaskWrapper}>
        <TextInput
        value = {text}
        onChangeText = {(value) => setText(value)}
        style = {styles.input}
        placeholder = 'Add task ...'
        ></TextInput>
        <Button
        onPress = {handleButton}
        title = 'Add'
        color = 'blue'
        ></Button>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  item:{
     alignItems:"flex-start",
     justifyContent: "space-between",
     paddingTop: 50,
     paddingLeft:20, 
  },
  addTaskWrapper:{
    position: 'absolute',
    bottom: 70,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width: "100%"
  },
  input:{
    backgroundColor:'#EEEEEE',
    width: '70%',
    height: 100,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
