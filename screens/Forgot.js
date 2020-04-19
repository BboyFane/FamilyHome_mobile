import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import Link from '../components/Link';

const Forgot = props => {
    let content = <View style={styles.fullscreen}>
        <Card style={styles.card}>
            <View>
                <Text style={styles.title}>Mot de passe oublié ?</Text>
                <View>
                    <Input style={styles.field}>Email</Input>
                    {/* <TextInput style={styles.field} placeholder='Username1' /> */}
                </View>
            </View>
            <View style={styles.space}>
                <CustomButton>Envoyer</CustomButton>
            </View>
            <View style={styles.space}>
                <Link url='http://google.com'>Se connecter</Link>
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
        alignItems: 'center'
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

export default Forgot;