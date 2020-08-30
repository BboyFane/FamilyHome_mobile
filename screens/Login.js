import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Linking, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import UserToken from '../contexts/UserTokenContext';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    connexion = (email, pwd) => {
        console.log('email:', email, 'password:', pwd); // Fetching data ok
        if ((pwd.value === "") || (email.value === "")) {
            alert("Veuillez renseigner correctement tous les champs.");
        } else {
            console.log('In the else');
            
            Axios.post('http://localhost:3005/user/connect', {
                email: email,
                pwd: pwd
            }).then(response => {
                console.log(response)
                //   var x = 0
                //   x = response.data['code']
                //  // console.log(response.data['CONNEXION REUSSIE']['key'])
                //   if (typeof  x === "undefined") {
                //     console.log(x)
                //      console.log(response.data['CONNEXION REUSSIE'])
                //   }else {
                //       alert("Error!" + response.data['Message']);
                //   }
            });
        }
    }
    // No need to put let or const since there's '= something',
    navigate = navigation.navigate // Is a Function
    // userToken = UserToken // Is an Object
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.title}>Se connecter à FamilyHome</Text>
                <TextInput onChangeText={email => setEmail(email)} style={styles.field} placeholder="Adresse email" textContentType='emailAddress' autoCapitalize='none' id='email' />
                <TextInput onChangeText={password => setPassword(password)} style={styles.field} placeholder='Mot de passe' secureTextEntry={true} textContentType='password' id='pwd' />
                <View style={styles.space}>
                    <CustomButton title='Se connecter' onPress={() => requireAuth()} buttonStyle={styles.loginButton} textStyle={styles.loginText} />
                    {/* <CustomButton title='Se connecter' onPress={() => connexion(email, password)} buttonStyle={styles.loginButton} textStyle={styles.loginText} /> */}
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