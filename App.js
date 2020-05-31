import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Submit from './screens/Submit';
import Home from './screens/Home';
import Room from './screens/Room';
import HomeShare from './screens/HomeShare';
import Profile from './screens/Profile';
import Map from './screens/Map';
import Notes from './screens/Notes';
import Note from './screens/Note';
import PhilipsHue from './screens/PhilipsHue';

const Stack = createStackNavigator();

// Mocked data
const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
const renderListOfRooms = (name, id) => (
  <Stack.Screen name={name} key={id} component={Room} options={{title: {name}}} />
)
export default function App() {
  // let content = <Login/>
  // let content = <Forgot/>
  // let content = <Submit />
  return (
    <NavigationContainer>
      {/* <View style={styles.background}>
      <Header title='FAMILYHOME' />
      <View style={styles.centered}> */}
      <Stack.Navigator initialRouteName='Login'>
        {/* <Login/> */}
        {/* {content} */}
        <Stack.Screen name='Login' component={Login} options={{ title: 'Bienvenue' }} />
        <Stack.Screen name='Forgot' component={Forgot} options={{ title: 'Réinitialiser le mot de passe' }} />
        <Stack.Screen name='Submit' component={Submit} options={{ title: 'En cours de réinitialisation' }} />
        <Stack.Screen name='Home' component={Home} options={{ title: 'Accueil' }} />
        <Stack.Screen name='Room' component={Room} options={{title: 'Room'}} />
        {rooms.map((room, index) => renderListOfRooms(room, index))}
        <Stack.Screen name='HomeShare' component={HomeShare} options={{title: 'HomeShare'}} />
        <Stack.Screen name='Profile' component={Profile} options={{title: 'Profil'}} />
        <Stack.Screen name='Map' component={Map} options={{title: 'Carte'}} />
        <Stack.Screen name='Notes' component={Notes} options={{title: 'HomeNotes'}} />
        <Stack.Screen name='Note' component={Note} options={{title: 'Note'}} />
        <Stack.Screen name='PhilipsHue' component={PhilipsHue} options={{title: 'PhilipsHue'}} />
      </Stack.Navigator>
      {/* </View>
      </View> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // background: {
  //   flex: 1,
  //   backgroundColor: '#222222',
  // },
  // centered: {
  //   height: '70%',
  //   justifyContent: 'center'
  // }
});

    // export default App;
