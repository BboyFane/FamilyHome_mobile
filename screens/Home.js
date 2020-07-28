import React, { useState } from 'react';
import { View, ScrollView, Switch, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import QuickChange from '../components/QuickChange';
import Fab from '../components/Fab';

const Home = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // Mocked data
    const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
    // List of devices
    const renderListOfRooms = (val, index, { navigation }) => (
        <View key={index} style={styles.scroll}>
            <Card style={styles.inlineRectangle}>
                <CustomButton title={val} onPress={() => navigation.navigate('Room')} buttonStyle={styles.button} textStyle={styles.text} />
                <Switch onValueChange={toggleSwitch} value={isEnabled} />
            </Card>
        </View>)
    
    return (
        <View style={styles.screen}>
            <QuickChange />
            <View style={styles.listOfElements}>
                <ScrollView>
                    {rooms.map((room, index) => renderListOfRooms(room, index, { navigation }))}
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
        minHeight: 100,
        minWidth: 230
    },
    text: {
        textAlign: 'left'
    }
})

export default Home;