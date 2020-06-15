import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import TabBar from './components/TabBar';
import Room from './screens/Room';
import Map from './screens/Map';
import Notes from './screens/Notes';
import Note from './screens/Note';
import PhilipsHue from './screens/PhilipsHue';
import UserToken from './contexts/UserTokenContext';

const Stack = createStackNavigator();

// Mocked data
const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
const renderListOfRooms = (name, id) => (
  <Stack.Screen name={name} key={id} component={Room} options={{ title: { name } }} />
)
export default function App() {
  const contextType = useContext(UserToken)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {/* {contextType == null ? (
          <> */}
            <Stack.Screen name='Login' component={Login} options={{ title: 'Bienvenue' }} />
            <Stack.Screen name='Forgot' component={Forgot} options={{ title: 'Réinitialiser le mot de passe' }} />
          {/* </>
        ) : (
            <> */}
              <Stack.Screen name='FamilyHome' component={TabBar} options={{ title: 'FamilyHome' }} />
              <Stack.Screen name='Room' component={Room} options={{ title: 'Room' }} />
              {rooms.map((room, index) => renderListOfRooms(room, index))}
              <Stack.Screen name='Map' component={Map} options={{ title: 'Carte' }} />
              <Stack.Screen name='Notes' component={Notes} options={{ title: 'HomeNotes' }} />
              <Stack.Screen name='Note' component={Note} options={{ title: 'Note' }} />
              <Stack.Screen name='PhilipsHue' component={PhilipsHue} options={{ title: 'PhilipsHue' }} />
            {/* </>
          )} */}
      </Stack.Navigator>
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