import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
// import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
// import Link from '../components/Link';

const Login = ({navigation}) => {
    let content = <View style={styles.fullscreen}>
        <Card style={styles.card}>
            <View>
                <Text style={styles.title}>Se connecter à FamilyHome</Text>
                <View>
                    {/* <Input style={styles.field} keyboardType='email-address'>Username1</Input> */}
                    <TextInput style={styles.field} placeholder="Nom d'utilisateur ou email" textContentType='username' autoCapitalize='none'/>
                </View>
                <View>
                    {/* <Input style={styles.field}>Password1</Input> */}
                    <TextInput style={styles.field} placeholder='Mot de passe' secureTextEntry={true} textContentType='password'/>
                </View>
            </View>
            <View style={styles.space}>
                <CustomButton onPress={() => navigation.navigate('Home')}>Se connecter</CustomButton>
            </View>
            <View>
                <Button title='Mot de passe oublié ?' onPress={() => navigation.navigate('Forgot')}/>
            </View>
        </Card>
    </View>
    return (<View style={{flex:1}}>
        <View style={styles.card}>
            {content}
        </View></View>
    )
}

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        // marginTop: '25%',
        justifyContent: 'center',
        // alignItems: 'center',
        minWidth: '90%',
        // maxHeight: '70°%',
        padding: 20,
    },
    fullscreen: {
        // flex: 1,
        padding: 15,
        // alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginBottom: 20
    },
    field: {
        borderWidth: 1,
        borderColor: '#2F2F2F',
        // backgroundColor: '#AAAAAA',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 20,
        margin: 5
    },
    space: {
        alignItems: 'center',
        minWidth: '100%',
        padding: 10
    }
})

export default Login;