import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from './Map';
import Notes from './Notes';

const Tab = createMaterialTopTabNavigator();

const HomeShare = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Map' component={Map} options={{ title: 'Carte' }} />
            <Tab.Screen name='Notes' component={Notes} options={{ title: 'HomeNotes' }} />
        </Tab.Navigator>
    )
}

export default HomeShare;