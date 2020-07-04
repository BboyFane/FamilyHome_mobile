import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const HomeShare = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Card style={styles.rectangle}><CustomButton title='Localisation' onPress={() => navigation.navigate('Map')} buttonStyle={styles.button} /></Card>
                <Card style={styles.rectangle}><CustomButton title='Notes' onPress={() => navigation.navigate('Notes')} buttonStyle={styles.button} /></Card>
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
    rectangle: {
        marginVertical: 10
    },
    button: {
        minHeight: 100
    }
})

export default HomeShare;