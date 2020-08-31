import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from './CustomButton';

const QuickChange = () => {
    // Colors
    const activeColor = '#007AFF'
    const inactiveColor = '#8E8E8F'
    // Device states
    const [lightActiveState, setLightActiveState] = useState(false) // Will fetch boolean from API
    const [plugActiveState, setPlugActiveState] = useState(false) // Will fetch boolean from API
    // Icon color change
    const [lightColor, setLightColor] = useState(lightActiveState == false ? inactiveColor : activeColor)
    const [plugColor, setPlugColor] = useState(plugActiveState == false ? inactiveColor : activeColor)
    
    return (
        <View style={styles.inline}>
            <Card>
                <Icons name="lightbulb-outline" color={lightColor} size={24} style={styles.icon} />
                <CustomButton title='Light' onPress={() => lightColor == inactiveColor ? (setLightColor(activeColor), setLightActiveState(!lightActiveState)) : (setLightColor(inactiveColor), setLightActiveState(!lightActiveState))} buttonStyle={styles.button} />
            </Card>
            <Card>
                <Icons name="power" color={plugColor} size={24} style={styles.icon} />
                <CustomButton title='Plug' onPress={() => plugColor == inactiveColor ? (setPlugColor(activeColor), setPlugActiveState(!plugActiveState)) : (setPlugColor(inactiveColor), setPlugActiveState(!plugActiveState))} buttonStyle={styles.button} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginVertical: 10
    },
    icon: {
        position: 'absolute',
        marginLeft: 38,
        zIndex: 0
    },
    button: {
        minHeight: 80,
        minWidth: 100,
        zIndex: 1
    }
})

export default QuickChange;
