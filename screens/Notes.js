import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import Fab from '../components/Fab';

// Mocked data
const notes = [['wesh les potos', 'wesh les potos texte', '27/12/2020'], ['les shinigamis mangent des pommes', 'Var entité spoil ou resume à 25 cara max', '27/12/2020'], ["j'ai gagné", "j'ai gagné texte", '27/12/2020']]
// List of notes
const renderListOfNotes = (val, index, { navigation }) => (
    <View key={index}>
        <CustomButton title={val[0] + '\n' + val[2] + '\t' + val[1]} onPress={() => navigation.navigate('Note', { title: val[0], text: val[1] })} buttonStyle={styles.button} textStyle={styles.text} />
        <View style={styles.separator} />
    </View>
)
const Notes = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ScrollView style={styles.listOfElements}>
                {notes.map((note, index) => renderListOfNotes(note, index, { navigation }))}
            </ScrollView>
            <Fab icon='add' onPress={() => navigation.navigate('Note', { title: '', text: '' })} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center'
    },
    listOfElements: {
        flex: 1,
        width: '100%',
        marginVertical: 10
    },
    button: {
        paddingHorizontal: 20,
        minHeight: 50,
        maxHeight: 70
    },
    text: {
        textAlign: 'left',
        paddingVertical: 10,
        color: 'black'
    },
    separator: {
        alignSelf: 'center',
        width: '50%',
        borderColor: '#D5D5D5',
        borderBottomWidth: 1
    }
})

export default Notes;