import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Task = () => {
    return (
        <View style = {styles.task}>
            <Text> Task component</Text>
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
    }
})

