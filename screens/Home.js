import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Icons from 'react-native-vector-icons/MaterialIcons';

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
            <View style={styles.inline}>
                <Card style={styles.permanent}><Icons name="album" color={'#8E8E8F'} size={24} /><Text style={styles.centered}>Music</Text></Card>
                <Card style={styles.permanent}><Icons name="album" color={'#8E8E8F'} size={24} /><Text style={styles.centered}>Light</Text></Card>
                <Card style={styles.permanent}><Icons name="album" color={'#8E8E8F'} size={24} /><Text style={styles.centered}>Plug</Text></Card>
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