import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

// Mocked data
const devices = ['google home', 'philips hue', 'light', 'fav light', 'plug']
// List of devices
const renderListOfDevices = (val, index) => (
    <View key={index} style={styles.rectangles}>
        <Card style={styles.rectangle}>
            <Button title={val} onPress={() => { }} />
        </Card>
    </View>)

const Room = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.inline}>
                <Card style={styles.permanent}><Text style={styles.centered}>Music</Text></Card>
                <Card style={styles.permanent}><Text style={styles.centered}>Light</Text></Card>
                <Card style={styles.permanent}><Text style={styles.centered}>Plug</Text></Card>
            </View>
            <View style={styles.listOfElements}>
                <ScrollView>
                    {devices.map((device, index) => renderListOfDevices(device, index))}
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
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginVertical: 10
    },
    permanent: {
        // width: 100,
        // height: 100,
        // justifyContent: 'center',
        // alignContent: 'center',
        padding: '8%'
    },
    centered: {
        // justifyContent: 'center', // For other element that text in the future
        textAlign: 'center'
    },
    listOfElements: {
        flex: 1,
        width: '80%',
        marginVertical: 10
    },
    rectangles: {
        padding: 5
    },
    rectangle: {
        marginVertical: 10,
        padding: 40
    }
})

export default Room;