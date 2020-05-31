import React from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

// Mocked data
const notes = ['wesh les potos', 'les shinigamis mangent des pommes', "j'ai gagné"]
// List of notes
const renderListOfNotes = (val, index, { navigation }) => (
    <View key={index} style={styles.rectangles}>
        <Card style={styles.rectangle}><Button title={val} onPress={() => navigation.navigate('Note')} /></Card>
    </View>
)
const Notes = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <ScrollView>
                    {notes.map((note, index) => renderListOfNotes(note, index, { navigation }))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listOfElements: {
        flex: 1,
        width: '80%',
        marginVertical: 10
    },
    rectangles: {
        // marginVertical: 10,
        padding: 5,
        textAlign: 'center'
    },
    rectangle: {
        marginVertical: 10,
        padding: 40,
        textAlign: 'center'
    }
})

export default Notes;