import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fab from '../components/Fab';
import Icons from 'react-native-vector-icons/MaterialIcons';
import io from 'socket.io-client';
const socket = io.connect('https://familyhome.herokuapp.com/')

const VocalAssistant = () => {
    const [isListening, setIsListening] = useState(false)
    const startStop = () => {
        isListening == true ? setIsListening(false) : (
            listening()
        )
    }
    const listening = () => {
        setIsListening(true)
    }

    socket.emit('Created');
    socket.on('result', (data) => {
        console.log('data: ', data);
        socket.close();
    })
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Votre assistant vocal</Text>
            {/* <Text>Vocal Assistant's Name is now listening</Text> */}
            <Text>Veuillez cliquer sur le micro en bas pour {isListening != true ? ('enregistrer') : ('arrêter')} votre demande.</Text>
            {isListening == true ? (
                <>
                    <View style={styles.listeningMode}>
                        <Text>Je vous écoute.</Text>
                        <Icons name='play-arrow' size={100} onPress={() => { }} />

                    </View>
                </>
            ) : (<Text></Text>)}
            <Fab icon='mic' size={24} onPress={() => startStop()} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title: {
        margin: 15,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listeningMode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 120
    }
})

export default VocalAssistant;