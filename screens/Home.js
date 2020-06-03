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
    // <View key={index} style={}>
    <View key={index} style={styles.rectangles}>
        <Card style={styles.rectangle}>
            <Button title={val} onPress={() => navigation.navigate('Room')} />
            {/* <Button title={val} onPress={() => navigation.navigate({val})}/> */}
        </Card>
    </View>)

const Home = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.inline}>
                <Card style={styles.permanent}><Text>Music</Text></Card>
                <Card style={styles.permanent}><Text>Light</Text></Card>
                <Card style={styles.permanent}><Text>Plug</Text></Card>
            </View>
            <View style={styles.listOfElements}>
                <ScrollView>
                    {rooms.map((room, index) => renderListOfRooms(room, index, { navigation }))}
                </ScrollView>
            </View>
            {/* Tabbar */}
            <View style={styles.inline}>
                <Card style={styles.tabbar}><Button title='Home' onPress={() => navigation.navigate('Home')} /></Card>
                <Card style={styles.tabbar}><Button title='HomeShare' onPress={() => navigation.navigate('HomeShare')} /></Card>
                <Card style={styles.tabbar}><Button title='Profil' onPress={() => navigation.navigate('Profile')} /></Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
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
        width: '80%',
        marginVertical: 10
    },
    rectangles: {
        // flexDirection: 'row',
        // flex: 1,
        // borderColor: '#EEAAAA',
        // borderWidth: 2,
        marginVertical: 10,
        padding: 5,
        textAlign: 'center'
    },
    rectangle: {
        padding: 40
    },
    tabbar: {
        width: '33%'
    }
})

export default Home;