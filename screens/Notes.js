import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

// Mocked data
const notes = ['wesh les potos', 'les shinigamis mangent des pommes', "j'ai gagné"]
// List of notes
const renderListOfNotes = (val, index, { navigation }) => (
    <View key={index} style={styles.scroll}>
        <Card style={styles.rectangle}>
            <CustomButton title={val} onPress={() => navigation.navigate('Note')} buttonStyle={styles.button} />
        </Card>
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
        alignItems: 'center'
    },
    listOfElements: {
        flex: 1,
        width: '80%',
        marginVertical: 10
    },
    scroll: {
        paddingHorizontal: 5
    },
    rectangle: {
        marginVertical: 10
    },
    button: {
        minHeight: 100
    }
})

export default Notes;