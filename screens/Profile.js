import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

const Username = 'Emerick';
const Fullname = 'Emerick Miatti';

const Profile = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Card style={styles.rectangle}>
                    <Text>{Username}</Text>
                    <Text>{Fullname}</Text>
                    <Text>Changer de photo de profil</Text>
                </Card>
                <Card style={styles.rectangle}><Button title='Se déconnecter' onPress={() => navigation.navigate('Login')} /></Card>
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
        width: '80%',
    },
    rectangle: {
        marginVertical: 10,
        padding: 40,
        textAlign: 'center'
    }
})

export default Profile;