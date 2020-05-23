import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

// Mocked data
const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
// List of devices
const renderListOfRooms = (val, index, {navigation}) => (
    // <View key={index} style={}>
    <View key={index} style={styles.rooms}>
        <Card style={styles.room}>
        <Button title={val} onPress={() => navigation.navigate('Room')}/>
        {/* <Button title={val} onPress={() => navigation.navigate(val)}/> */}
            {/* <Text> */}
                {/* {roundNumber} {val} */}
            {/* </Text> */}
        </Card>
    </View>)

const Home = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View>
                <Text>Permanent</Text>
            </View>
            <View style={styles.listOfElements}>
                <ScrollView>
                    {rooms.map((room, index) => renderListOfRooms(room, index, {navigation}))}
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
    listOfElements: {
        flex: 1,
        width: '80%'
    },
    rooms: {
        // flexDirection: 'row',
        // flex: 1,
        // borderColor: '#EEAAAA',
        // borderWidth: 2,
        marginVertical: 10,
        padding: 5,
        textAlign: 'center'
    },
    room: {
        padding: 40
    }
})

export default Home;