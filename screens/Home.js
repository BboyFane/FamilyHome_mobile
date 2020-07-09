import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import QuickChange from '../components/QuickChange';
import Fab from '../components/Fab';

// Mocked data
const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
// List of devices
const renderListOfRooms = (val, index, { navigation }) => (
    <View key={index} style={styles.scroll}>
        <Card style={styles.rectangle}>
            <CustomButton title={val} onPress={() => navigation.navigate('Room')} buttonStyle={styles.button} />
        </Card>
    </View>)

const Home = ({ navigation }) => {
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
    rectangle: {
        marginVertical: 10
    },
    button: {
        minHeight: 100
    }
})

export default Home;