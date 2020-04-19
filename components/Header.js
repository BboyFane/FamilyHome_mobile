import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        // paddingTop: 30,
        backgroundColor: '#2F2F2F',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 50
    },
    title: {
        color: '#B35757',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header;