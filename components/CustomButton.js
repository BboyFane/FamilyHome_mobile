import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.buttonStyle }}>
                <Text style={{ ...styles.buttonText, ...props.textStyle }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#007AFF',
    }
});

export default CustomButton;