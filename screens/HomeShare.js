import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

const HomeShare = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Card style={styles.rectangle}><Text>Localisation</Text></Card>
                <Card style={styles.rectangle}><Text>Notes</Text></Card>
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

export default HomeShare;