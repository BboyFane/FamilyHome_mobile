import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Note = ({ route }) => {
    const { title, text } = route.params
    return (
        <View style={styles.note}>
            <TextInput placeholder='Titre' multiline={true} maxLength={77} style={styles.titleNote}>{title}</TextInput>
            <View style={styles.separator} />
            <TextInput placeholder='Contenu' multiline={true} style={styles.text}>{text}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        flex: 1
    },
    titleNote: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    separator: {
        borderColor: '#D5D5D5',
        borderBottomWidth: 1
    },
    text: {
        flex: 1,
        margin: 20
    },
})

export default Note;