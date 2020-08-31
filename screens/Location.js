import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Fab from '../components/Fab';

const Location = () => {
    // Mocked data
    const users = [['Livai', 'adresse Livai'], ['Daddy', 'adresse Daddy'], ['Brother', 'adresse Brother'], ['King', 'adresse King'], ['Mommy', 'adresse Mommy']] // Will fetch array from API
    // List of users
    const renderListOfUsers = (val, index, { navigation }) => (
        <View key={index} style={styles.scroll}>
            <Card style={styles.inlineRectangle}>
                <CustomButton title={val[0]} onPress={() => { }} buttonStyle={styles.button} textStyle={styles.text} />
                <Text>{val[1]}</Text>
            </Card>
        </View>)
    return (
        <View style={styles.screen}>
            <Text>Will display default map of the device or Google Map in our app</Text>
            <Text>Or list of user's locations as card with name and street addresses with redirection to location app</Text>
            <View style={styles.listOfElements}>
                <ScrollView>
                    {users.map((user, index) => renderListOfUsers(user, index, { navigation }))}
                </ScrollView>
            </View>
            <Fab icon='mic' onPress={() => navigation.navigate('VocalAssistant')} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
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
        justifyContent: 'space-evenly',
        marginVertical: 10,
        paddingHorizontal: 20,
        minHeight: 70
    },
    button: {
        minWidth: 230
    },
    text: {
        textAlign: 'left'
    }
})

export default Location;