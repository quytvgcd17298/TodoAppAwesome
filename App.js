import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.item}>
      <Text style = {{ fontSize: 24}}>Today Tasks</Text>
      </View>
      <View>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
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
  item:{
     alignItems:"flex-start",
     justifyContent: "space-between",
     paddingTop: 50,
     paddingLeft:20,
     
  }
});
