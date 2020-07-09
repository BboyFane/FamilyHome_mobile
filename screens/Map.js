import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Map = () => {
    return (
        <View style={styles.screen}>
            <Text>Will display default map of the device or Google Map in our app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Map;