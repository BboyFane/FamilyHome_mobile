import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Icons from 'react-native-vector-icons/MaterialIcons';
import QuickChange from '../components/QuickChange';

// Mocked data
const devices = ['google home', 'philips hue', 'light', 'fav light', 'plug']
// List of devices
const renderListOfDevices = (val, index) => (
    <View key={index} style={styles.scroll}>
        <Card style={styles.rectangle}>
            <CustomButton title={val} onPress={() => { }} buttonStyle={styles.button} />
        </Card>
    </View>)

const Room = props => {
    return (
        <View style={styles.screen}>
            <QuickChange/>
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
    scroll: {
        paddingHorizontal: 5
    },
    rectangle: {
        marginVertical: 10,
    },
    button: {
        minHeight: 100
    }
})

export default Room;