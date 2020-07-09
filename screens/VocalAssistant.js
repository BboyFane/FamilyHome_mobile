import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VocalAssistant = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Our Vocal Assistant's Name</Text>
            <Text>Will display our Vocal Assistant</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        margin: 15,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default VocalAssistant;