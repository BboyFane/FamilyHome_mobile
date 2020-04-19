// No utility yet since there's no specific use

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = props => {
    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

    }
})