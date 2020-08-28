import React from 'react';
import { StyleSheet } from 'react-native';
import Card from './Card';
import CustomButton from './CustomButton';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Fab = props => {
    return (
        <Card style={{ ...styles.fab, ...props.fabStyle }}>
            <CustomButton title={<Icons name={props.icon} size={24} />} onPress={props.onPress} />
        </Card>
    )
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30
    }
})

export default Fab;