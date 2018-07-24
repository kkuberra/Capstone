import React from 'react';
import { StyleSheet, Text, View, Footer } from 'react-native';
import { Router, Stack, Scene } from
'react-native-router-flux';

import Home from "./components/Home";
import Teams from "./components/Teams";
import Players from './components/Players'
import Stats from './components/Stats'
import Favorites from './components/Favorites'

favoritesURL = 'http://localhost:3000/api/v1/favorites'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      players: []
    }
  } 

  



  getPlayerById(player_id) {
    this.state.players.forEach(player => {
      if (player.PlayerID == player_id) {
        return player
      }
    })
  }
  
  render() {
    console.log

    return (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home}/>
      <Scene key="Teams" component={Teams} title="Teams"/>
      <Scene key="players" component={Players} title="Players"/>
      <Scene key="stats" component={Stats} title="Stats"/>
      <Scene key="Favorites" component={Favorites} title="Favorites"/>
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
