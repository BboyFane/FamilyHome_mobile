import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import QuickChange from '../components/QuickChange';
import Fab from '../components/Fab';

// Mocked data
const devices = ['google home', 'philips hue', 'light', 'fav light', 'plug']
// List of devices
const renderListOfDevices = (val, index) => (
    <View key={index} style={styles.scroll}>
        <Card style={styles.rectangle}>
            <CustomButton title={val} onPress={() => { }} buttonStyle={styles.button} />
        </Card>
    </View>)

const Room = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <QuickChange />
            <View style={styles.listOfElements}>
                <ScrollView>
                    {devices.map((device, index) => renderListOfDevices(device, index))}
                </ScrollView>
            </View>
            <Fab icon='mic' onPress={() => navigation.navigate('VocalAssistant')} />
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

export default Room;