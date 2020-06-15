import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DCDCDC',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        textAlign: 'center'
    }
});

export default CustomButton;