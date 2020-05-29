import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

const PhilipsHue = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Text style={styles.name}>Nom de l'ampoule</Text>
                <Card style={styles.permanent}><Text>Light</Text></Card>
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
        width: '80%'
    },
    name: {
        textAlign: 'center'
    },
    rectangle: {
        marginVertical: 10,
        padding: 40,
        textAlign: 'center'
    },
    permanent: {
        padding: '8%'
    },
})

export default PhilipsHue;