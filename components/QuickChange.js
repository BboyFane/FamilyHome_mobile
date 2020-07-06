import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from './CustomButton';

const QuickChange = () => {
    const [musicColor, setMusicColor] = useState('#8E8E8F')
    const [lightColor, setLightColor] = useState('#8E8E8F')
    const [plugColor, setPlugColor] = useState('#8E8E8F')
    return (
        <View style={styles.inline}>
            <Card style={styles.permanent}><Icons name="play-arrow" color={musicColor} size={24} style={{textAlign:'center'}} /><CustomButton title='Music' onPress={() => musicColor==('#8E8E8F') ? setMusicColor('#007AFF') : setMusicColor('#8E8E8F')} buttonStyle={styles.button} /></Card>
            <Card style={styles.permanent}><Icons name="lightbulb-outline" color={lightColor} size={24} style={{textAlign:'center'}} /><CustomButton title='Light' onPress={() => lightColor==('#8E8E8F') ? setLightColor('#007AFF') : setLightColor('#8E8E8F')} buttonStyle={styles.button} /></Card>
            <Card style={styles.permanent}><Icons name="power" color={plugColor} size={24} style={{textAlign:'center'}} /><CustomButton title='Plug' onPress={() => plugColor==('#8E8E8F') ? setPlugColor('#007AFF') : setPlugColor('#8E8E8F')} buttonStyle={styles.button} /></Card>
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
    permanent: {
        // width: 100,
        // height: 100,
        // justifyContent: 'center',
        // alignContent: 'center',
        // padding: '8%'
    },
    button: {
        minHeight: 80,
        minWidth: 100
    }
})

export default QuickChange;
