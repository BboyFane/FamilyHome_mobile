import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

// Mocked data
const notes = ['wesh les potos', 'les shinigamis mangent des pommes', "j'ai gagné"]
// List of notes
const renderListOfNotes = (val, index) => (
    <View key={index}>
        <Card style={styles.rectangle}><Text>{val}</Text></Card>
    </View>
)
const Notes = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                {notes.map((note, index) => renderListOfNotes(note, index))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    listOfElements: {
        width: '80%',
    },
    rectangle: {
        marginVertical: 10,
        padding: 40,
        textAlign: 'center'
    }
})

export default Notes;