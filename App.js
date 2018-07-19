import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from
'react-native-router-flux';

import Home from "./components/Home";
import Teams from "./components/Teams";
import Players from './components/Players'


export default class App extends React.Component {
  
  render() {
      // <View style={styles.container}>
      //           <HomeView />
      //       </View>
    return (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home}/>
      <Scene key="Teams" component={Teams} title="Teams"/>
      <Scene key="players" component={Players} title="Players"/>
      {/* <Scene key="register" component={Register} title="Register"/> */}
    </Stack>
  </Router>
);

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
