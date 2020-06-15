import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../components/Card';
// import Room from './Room';

// const Tab = createBottomTabNavigator();

// Mocked data
const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
// List of devices
const renderListOfRooms = (val, index, { navigation }) => (
    <View key={index} style={styles.rectangles}>
        <Card style={styles.rectangle}>
            <Button title={val} onPress={() => navigation.navigate('Room')} />
        </Card>
    </View>)

const Home = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.inline}>
                <Card style={styles.permanent}><Text style={styles.centered}>Music</Text></Card>
                <Card style={styles.permanent}><Text style={styles.centered}>Light</Text></Card>
                <Card style={styles.permanent}><Text style={styles.centered}>Plug</Text></Card>
            </View>
            <View style={styles.listOfElements}>
                <ScrollView>
                    {rooms.map((room, index) => renderListOfRooms(room, index, { navigation }))}
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
    rectangles: {
        padding: 5
    },
    rectangle: {
        marginVertical: 10,
        padding: 40
    },
    tabbar: {
        width: '33%'
    }
})

export default Home;