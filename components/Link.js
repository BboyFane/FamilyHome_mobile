import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const Link = props => {
    return ( <View>
        <Text style={styles.link} onPress={() => Linking.openURL(props.url)}>{props.children}</Text>
    </View>)
}

const styles = StyleSheet.create({
    link: {
        color: 'rgb(26, 13, 171)'
        // color: 'blue'
    }
})

export default Link;