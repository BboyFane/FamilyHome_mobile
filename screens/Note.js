import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Note = props => {
    return (
        <View style={styles.note}>
            <TextInput style={styles.titleNote}>Yo poto</TextInput>
            <View style={styles.separator}></View>
            <TextInput style={styles.text}>Yo poto (du texte)</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        // flex: 1
    },
    titleNote: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    separator: {
        borderColor: 'black',
        borderBottomWidth: 1
    },
    text: {
        margin: 10
    },
})

export default Note;