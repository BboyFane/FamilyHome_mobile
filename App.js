import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Submit from './screens/Submit';

export default function App() {
  // let content = <Login/>
  // let content = <Forgot/>
  let content = <Submit/>
  return (
    <View style={styles.background}>
      <Header title='FAMILYHOME'/>
      <View style={styles.centered}>
        {/* <Login/> */}
      {content}
      </View>
    </View>
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
