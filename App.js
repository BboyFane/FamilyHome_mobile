import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import TabBar from './screens/TabBar';
import Room from './screens/Room';
import Note from './screens/Note';
import PhilipsHue from './screens/PhilipsHue';
import VocalAssistant from './screens/VocalAssistant';
import UserToken from './contexts/UserTokenContext';
import authFailed from './components/auth/AuthComponent';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

// Mocked data
const rooms = ['Living room', "Daddy's room", 'Brother room', 'Kitchen', 'Bathroom']
const renderListOfRooms = (name, id) => (
  <Stack.Screen name={name} key={id} component={Room} options={{ title: { name } }} />
)
export default function App({ navigation }) {
  // const contextType = useContext(UserToken)
  const [isConnect, setIsConnect] = useState(false)

  const requireAuth = () => {
    setIsConnect(true)
    return isConnect
  }

  const logout = () => {
    setIsConnect(false)
    return isConnect
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {isConnect == false ? (
          <>
            <Stack.Screen name='Login' component={Login} options={{ title: 'Bienvenue' }} initialParams={{ 'requireAuth': requireAuth }} />
            <Stack.Screen name='Forgot' component={Forgot} options={{ title: 'Réinitialiser le mot de passe' }} />
          </>
        ) : (
            <>
              <Stack.Screen name='FamilyHome' component={TabBar} options={{ title: 'FamilyHome' }} initialParams={{ 'logout': logout }} />
              <Stack.Screen name='Room' component={Room} options={{ title: 'Room' }} />
              {rooms.map((room, index) => renderListOfRooms(room, index))}
              <Stack.Screen name='Note' component={Note} options={{ title: 'Note' }} />
              <Stack.Screen name='PhilipsHue' component={PhilipsHue} options={{ title: 'PhilipsHue' }} />
              <Stack.Screen name='VocalAssistant' component={VocalAssistant} options={{ title: 'VocalAssistant' }} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}