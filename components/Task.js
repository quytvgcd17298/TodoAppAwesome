import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = () => {
    return (
        <View style = {styles.task}>
            <View style = {styles.leftItem}>
                <TouchableOpacity style = {styles.square}></TouchableOpacity>
                <Text> Task component</Text>
            </View>
        <View style = {styles.circle}></View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    task:{
        backgroundColor: "#EEEEEE",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,     
        marginHorizontal:20  
    },
    leftItem:{
        flexDirection: "row",
        alignItems: "center",
    },
    square:{
        width: 20,
        height: 20,
        backgroundColor:"lightblue",
        marginRight: 5,
    },
    circle:{
        height: 20,
        width: 20,
        opacity:5,
        borderRadius:20,
        backgroundColor:"lightpink"
    }
})

