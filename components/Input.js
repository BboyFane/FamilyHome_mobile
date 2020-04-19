import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <View style={styles.frame}>
        {/* <View style={{...styles.frame, ...props.style}}> */}
            <TextInput placeholder={props.children} keyboardType={props.keyboardType} autoCorrect={false}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    frame: {
        borderWidth: 1,
        borderColor: '#2F2F2F',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 20,
        margin: 5
    }
})

export default Input;