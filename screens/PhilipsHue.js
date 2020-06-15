import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

const PhilipsHue = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Text style={styles.title}>Nom de l'ampoule</Text>
                <Card style={styles.rectangle}><Text>Light</Text></Card>
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
    title: {
        textAlign: 'center',
        marginBottom: 20
    },
    rectangle: {
        marginVertical: 10,
        padding: 40
    },
})

export default PhilipsHue;