import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import HomeShare from './HomeShare';
import Profile from './Profile';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabBar = (props) => {
    logout = props.route.params.logout
    navigation = props.navigation
    
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{ title: 'Accueil', tabBarIcon: ({ color, size }) => <Icons name="home" color={color} size={size} /> }} />
            <Tab.Screen name='HomeShare' component={HomeShare} options={{ title: 'HomeShare', tabBarIcon: ({ color, size }) => <Icons name="cloud" color={color} size={size} /> }} />
            <Tab.Screen name='Profile' component={Profile} options={{ title: 'Profil', tabBarIcon: ({ color, size }) => <Icons name="person" color={color} size={size} /> }} initialParams={{ 'logout': logout }} />
        </Tab.Navigator>
    )
}

export default TabBar;