import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Link from '../components/Link';

const Submit = ({navigation}) => {
    let content = <View style={styles.fullscreen}>
        <Card style={styles.card}>
            <View>
                <Text style={styles.title}>Réinitialiser mon mot de passe</Text>
                <Text style={styles.text}>
                    Vous allez recevoir un email pour réinitialiser votre mot de passe si un compte FamilyHome est bien associé à l'adresse mail renseignée.
    Veuillez vérifier votre boîte de spams.
                </Text>
            </View>
            {/* <View style={styles.space}>
                <CustomButton>Se connecter</CustomButton>
            </View> */}
            <View style={styles.space}>
                <Button title='Se connecter' onPress={() => navigation.navigate('Login')} />
            </View>
        </Card>
    </View>
    return (
        <View style={styles.card}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        minWidth: '90%',
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
    text: {
        textAlign: 'center',
    },
    space: {
        alignItems: 'center',
        minWidth: '100%',
        padding: 10
    }
})

export default Submit;