import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const Forgot = ({ navigation }) => {
    const submit = () => {
        Alert.alert('Réinitialiser le mot de passe', 'Vous allez recevoir un email pour réinitialiser votre mot de passe si un compte FamilyHome est bien associé à l\'adresse mail renseignée.\n Veuillez vérifier votre boîte de spams.', [{ text: 'OK', onPress: () => resetPassword }])
    }
    const resetPassword = () => { }
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.title}>Mot de passe oublié ?</Text>
                <TextInput style={styles.field} placeholder="Adresse email" textContentType='username' autoCapitalize='none' />
                <View style={styles.space}>
                    <CustomButton title='Réinitialiser' onPress={submit} buttonStyle={styles.buttonLogin} textStyle={styles.textLogin} />
                </View>
                <Button title='Se connecter' onPress={() => navigation.navigate('Login')} />
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
        paddingLeft: 20,
        margin: 5
    },
    space: {
        alignItems: 'center',
        padding: 10
    },
    buttonLogin: {
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 25,
        borderWidth: 1
    },
    textLogin: {
        fontSize: 16,
        color: 'black'
    }
})

export default Forgot;