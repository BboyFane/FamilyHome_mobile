import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';

// Mocked data
const devices = ['google home', 'philips hue', 'light', 'fav light', 'plug']
// List of devices
const renderListOfDevices = (val, index) => (
    <View key={index} style={styles.devices}>
        <Card style={styles.device}>
            <Text>
                Appareil{/* {roundNumber} */} {val}
            </Text>
        </Card>
    </View>)

const Room = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.inline}>
                <Card style={styles.permanent}><Text>Music</Text></Card>
                <Card style={styles.permanent}><Text>Light</Text></Card>
                <Card style={styles.permanent}><Text>Plug</Text></Card>
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
        padding: 10,
        alignItems: 'center'
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginVertical: 10
    },
    permanent: {
        padding: '8%'
    },
    listOfElements: {
        flex: 1,
        width: '80%'
    },
    devices: {
        // flexDirection: 'row',
        // flex: 1,
        // borderColor: '#EEAAAA',
        // borderWidth: 2,
        marginVertical: 10,
        padding: 5,
        textAlign: 'center'
    },
    device: {
        padding: 40
    }
})

export default Room;