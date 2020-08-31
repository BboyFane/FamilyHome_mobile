import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Location from './Location';
import Notes from './Notes';

const Tab = createMaterialTopTabNavigator();

const HomeShare = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Location' component={Location} options={{ title: 'Localisation' }} />
            <Tab.Screen name='Notes' component={Notes} options={{ title: 'HomeNotes' }} />
        </Tab.Navigator>
    )
}

export default HomeShare;