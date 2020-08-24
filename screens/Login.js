import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Linking, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import UserToken from '../contexts/UserTokenContext';
import AsyncStorage from '@react-native-community/async-storage';

// const verification = data => { }

const isSuccessful = async () => {
    navigate('FamilyHome') // delete when next line operational
    // console.log('userToken before press: ',userToken);
    // userToken = 'token value is updated'
    // console.log('New value userToken: ',userToken);
    // await AsyncStorage.setItem('authToken', 'val du token')
    // let a = await AsyncStorage.getItem('authToken')
    // console.log(a);
    // return true
}

const Login = (props) => {
    requireAuth = props.route.params.requireAuth
    navigation = props.navigation
    
    // No need to put let or const since there's '= something',
    navigate = navigation.navigate // Is a Function
    // userToken = UserToken // Is an Object
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.title}>Se connecter à FamilyHome</Text>
                <TextInput style={styles.field} placeholder="Adresse email" textContentType='emailAddress' autoCapitalize='none' />
                <TextInput style={styles.field} placeholder='Mot de passe' secureTextEntry={true} textContentType='password' />
                <View style={styles.space}>
                    <CustomButton title='Se connecter' onPress={() => requireAuth()} buttonStyle={styles.loginButton} textStyle={styles.loginText} />
                </View>
                <Button title='Mot de passe oublié ?' onPress={() => navigation.navigate('Forgot')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35
    },
    card: {
        minWidth: '100%',
        padding: 20
    },
    title: {
        textAlign: 'center',
        marginBottom: 20
    },
    field: {
        borderWidth: 1,
        borderColor: '#2F2F2F',
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 20,
        margin: 5
    },
    space: {
        alignItems: 'center',
        padding: 10
    },
    loginButton: {
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 25,
        borderWidth: 1,
    },
    loginText: {
        fontSize: 16,
        color: 'black'
    }
})

export default Login;