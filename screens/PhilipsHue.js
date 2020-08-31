import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { ColorPicker } from 'react-native-color-picker';
import hexRgb from 'hex-rgb';


const PhilipsHue = props => {
    // Toggle switch logic
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Card style={styles.inlineRectangle}>
                    <Text style={styles.title}>{props.route.params != undefined ? props.route.params.name : "Mon ampoule"}</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </Card>
                <View style={{ flex: 1, bottom: 30 }}>
                    <ColorPicker onColorSelected={(color) => {
                        alert(`Color selected: ${color}`);
                        console.log(hexRgb({ color }.color))
                    }} style={{ flex: 1 }} />
                </View>
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
    title: {
        margin: 15,
        fontSize: 20
    },
    inlineRectangle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        padding: 20,
        // backgroundColor: {color}
    },
})

export default PhilipsHue;