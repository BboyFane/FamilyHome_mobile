import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

const HomeShare = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
            <Card style={styles.rectangle}><Button title='Localisation' onPress={() => navigation.navigate('Map')}/></Card>
                <Card style={styles.rectangle}><Button title='Notes' onPress={() => navigation.navigate('Notes')}/></Card>
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