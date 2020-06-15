import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.frame, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    frame: {
        borderColor: '#F0F0F0',
        borderWidth: 1,
        backgroundColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 4,
        borderRadius: 10
    }
})

export default Card;