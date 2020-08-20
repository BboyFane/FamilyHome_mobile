import React, { useState } from 'react';
import { View, ScrollView, Switch, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import QuickChange from '../components/QuickChange';
import Fab from '../components/Fab';

const Room = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // Mocked data
    const devices = ['google home', 'philips hue', 'light', 'fav light', 'plug']
    // List of devices
    const renderListOfDevices = (val, index) => (
        <View key={index} style={styles.scroll}>
            <Card style={styles.inlineRectangle}>
                <CustomButton title={val} onPress={() => { }} buttonStyle={styles.button} textStyle={styles.text} />
                <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </Card>
        </View>)

    return (
        <View style={styles.screen}>
            <QuickChange />
            <View style={styles.listOfElements}>
                <ScrollView>
                    <View style={styles.scroll}>
                        <Card style={styles.inlineRectangle}>
                            <CustomButton title='Philips Hue' onPress={() => navigation.navigate('PhilipsHue')} buttonStyle={styles.button} textStyle={styles.text} />
                            <Switch onValueChange={toggleSwitch} value={isEnabled} />
                        </Card>
                    </View>
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
    inlineRectangle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        minHeight: 70,
        minWidth: 230
    },
    text: {
        textAlign: 'left'
    }
})

export default Room;