import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Note = props => {
    return (
        <View style={styles.note}>
            <TextInput style={styles.title}>Yo poto</TextInput>
            <View style={styles.separator}></View>
            <TextInput style={styles.text}>Yo poto (du texte)</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        // flex: 1
        // marginHorizontal: 10,
    },
    title: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    separator: {
        borderColor: 'black',
        borderBottomWidth: 1
    },
    text: {
        margin: 10,
        width: '100%'
    },
})

export default Note;