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
        // width: '90%',
        // alignItems: 'center',
        // padding: 10,
        borderColor: '#F0F0F0',
        borderWidth: 1,
        // backgroundColor: 'rgba(255,255,255,0.8)',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        elevation: 4,
        borderRadius: 10
    }
})

export default Card;