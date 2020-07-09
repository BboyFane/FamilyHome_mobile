import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from './CustomButton';

const QuickChange = () => {
    const activeColor = '#007AFF'
    const inactiveColor = '#8E8E8F'
    // const [musicColor, setMusicColor] = useState(inactiveColor)
    const [lightColor, setLightColor] = useState(inactiveColor)
    const [plugColor, setPlugColor] = useState(inactiveColor)
    return (
        <View style={styles.inline}>
            {/* <Card>
                <Icons name="play-arrow" color={musicColor} size={24} style={{ textAlign: 'center' }} />
                <CustomButton title='Music' onPress={() => musicColor == (inactiveColor) ? setMusicColor(activeColor) : setMusicColor(inactiveColor)} buttonStyle={styles.button} />
            </Card> */}
            <Card>
                <Icons name="lightbulb-outline" color={lightColor} size={24} style={styles.icon} />
                <CustomButton title='Light' onPress={() => lightColor == (inactiveColor) ? setLightColor(activeColor) : setLightColor(inactiveColor)} buttonStyle={styles.button} />
            </Card>
            <Card>
                <Icons name="power" color={plugColor} size={24} style={styles.icon} />
                <CustomButton title='Plug' onPress={() => plugColor == (inactiveColor) ? setPlugColor(activeColor) : setPlugColor(inactiveColor)} buttonStyle={styles.button} />
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
