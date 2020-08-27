import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import { Avatar } from 'react-native-elements';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Fab from '../components/Fab';

// Mocked data
// const username = 'Emerick';
const fullname = 'Emerick Miatti';
const email = 'emerick.miatti@imie-paris.fr';
const image = require('../assets/default.jpg')
// const image = null

const options = {
    title: 'Choisir une photo de profil',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const ChooseAvatar = () => {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            const source = { uri: response.uri };

            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source,
            });
        }
    })
}


const Profile = (props) => {
    logout = props.route.params.logout
    navigation = props.navigation
    const [username, setUsername] = useState('Emerick')
    const [password, setPassword] = useState('')
    
    const changeUsername = (username) => {
        Alert.alert("Vous venez de changer votre nom d'utilisateur", "Votre nom d'utilisateur a bien été modifié.", [{ text: 'OK', onPress: () => saveNewUsername(username) }])
    }
    const saveNewUsername = (newUsername) => {
        console.log('username:', newUsername, '.');
    }
    const changePassword = (password) => {
        Alert.alert('Vous venez de changer de mot de passe', 'Votre mot de passe a bien été modifié.', [{ text: 'OK', onPress: () => saveNewPassword(password) }])
    }
    const saveNewPassword = (newPassword) => {
        console.log('password:', newPassword, '.');
    }
    const [notifications, setNotifications] = useState(true)
    const changeNotificationStatus = () => {
        notifications == true ? setNotifications(false) : setNotifications(true)
    }
    return (
        <View style={styles.screen}>
            <View style={styles.cardSize}>
                <Card style={styles.profileCard}>
                    <View style={styles.inlineInformation}>
                        <View style={styles.information}>
                            <View style={styles.inlineText}>
                                <TextInput onChangeText={username => setUsername(username)} defaultValue={username} style={styles.username}/>
                                <Icons name='edit' color={'grey'} size={24} />
                            </View>
                            <Text>{fullname}</Text>
                            <Text>{email}</Text>
                        </View>
                        <View style={styles.picture}>
                            {image ?
                                <Avatar rounded size='large' activeOpacity={0.7} onPress={ChooseAvatar} containerStyle={styles.avatar} source={require('../assets/default.jpg')} />
                                : <Avatar rounded size='large' activeOpacity={0.7} onPress={ChooseAvatar} containerStyle={styles.initial} title="EM" />}
                        </View>
                    </View>
                    <View style={styles.inlineText}>
                        <Text>Mot de passe : </Text>
                        <TextInput onChangeText={password => setPassword(password)} defaultValue={password} style={{ flex: 1 }} placeholder='nouveau mot de passe'/>
                        <Icons name='edit' color={'grey'} size={24} />
                    </View>
                    <CustomButton title="Changer de nom d'utilisateur" onPress={() => changeUsername(username)} buttonStyle={styles.profileButton} textStyle={styles.textLogin} />
                    <CustomButton title='Changer de mot de passe' onPress={() => changePassword(password)} buttonStyle={styles.profileButton} textStyle={styles.textLogin} />
                    {notifications == true ?
                        <CustomButton title='Désactiver les notifications' onPress={changeNotificationStatus} buttonStyle={styles.profileButton} />
                        : <CustomButton title='Activer les notifications' onPress={changeNotificationStatus} buttonStyle={styles.profileButton} />
                    }
                    <CustomButton title='Se déconnecter' onPress={() => logout()} buttonStyle={styles.profileButton} />
                </Card>
            </View>
            <Fab icon='mic' onPress={() => navigation.navigate('VocalAssistant')} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    cardSize: {
        width: '80%'
    },
    profileCard: {
        marginVertical: 10,
        padding: 20
    },
    inlineInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    inlineText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    information: {
        flex: 2 // 2 to respect padding and 3 to have some space
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: '#AEAEAE',
        paddingLeft: 10,
        marginBottom: 10,
        width: '90%'
    },
    picture: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        minHeight: 80,
        minWidth: 80
    },
    initial: {
        backgroundColor: '#DCDCDC',
        minHeight: 80,
        minWidth: 80
    },
    profileButton: {
        paddingVertical: 10
    }
})

export default Profile;