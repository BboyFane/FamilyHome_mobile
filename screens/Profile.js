import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Avatar } from 'react-native-elements';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

// Mocked data
const username = 'Emerick';
const fullname = 'Emerick Miatti';
const email = 'emerick.miatti@imie-paris.fr';
const image = require('../assets/default.jpg')
// const image = null
let iconColor

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


const Profile = ({ navigation }) => {
    const [notifications, setNotifications] = useState(true)
    const changeNotificationStatus = () => {
        notifications == true ? setNotifications(false) : setNotifications(true)
    }
    return (
        <View style={styles.screen}>
            <View style={styles.listOfElements}>
                <Card style={styles.rectangle}>
                    <View style={styles.inlineInformation}>
                        <View style={styles.information}>
                            <Text style={styles.username}>{username}</Text>
                            <Text>{fullname}</Text>
                            <Text>{email}</Text>
                        </View>
                        <View style={styles.picture}>
                            {image ?
                                <Avatar rounded size='large' activeOpacity={0.7} onPress={ChooseAvatar} containerStyle={styles.avatar} source={require('../assets/default.jpg')} />
                                : <Avatar rounded size='large' activeOpacity={0.7} onPress={ChooseAvatar} containerStyle={styles.initial} title="EM" />}
                        </View>
                    </View>
                </Card>
                <Card style={styles.notifications}>
                    {notifications == true ?
                        <CustomButton title='Désactiver les notifications' onPress={changeNotificationStatus} buttonStyle={styles.button} />
                        : <CustomButton title='Activer les notifications' onPress={changeNotificationStatus} buttonStyle={styles.button} />
                    }
                </Card>
                <Card style={styles.logout}>
                    <CustomButton title='Se déconnecter' onPress={() => navigation.navigate('Login')} buttonStyle={styles.button} />
                </Card>
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
        flex: 1,
        width: '80%',
        marginVertical: 10
    },
    rectangle: {
        marginVertical: 10,
        justifyContent: 'center',
        padding: 20
    },
    inlineInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    information: {
        flex: 2 // 2 to respect padding and 3 to have some space
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    picture: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        minHeight: 80,
        minWidth: 80,
    },
    initial: {
        backgroundColor: '#DCDCDC',
        minHeight: 80,
        minWidth: 80,
    },
    notifications: {
        marginVertical: 10
    },
    button: {
        minHeight: 100
    },
    logout: {
        marginVertical: 10
    }
})

export default Profile;