import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Submit from './screens/Submit';

const Stack = createStackNavigator();

export default function App() {
  let content = <Login/>
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
        <Stack.Screen name='Login' component={Login} options={{ title: 'Accueil' }} />
        <Stack.Screen name='Forgot' component={Forgot} options={{ title: 'Réinitialiser le mot de passe' }} />
        <Stack.Screen name='Submit' component={Submit} options={{ title: 'En cours de réinitialisation' }} />
      </Stack.Navigator>
      {/* </View>
      </View> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#222222',
  },
  centered: {
    height: '70%',
    justifyContent: 'center'
    // flex: 1,
  }
});

    // export default App;
