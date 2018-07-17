import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Actions } from
'react-native-router-flux';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class Teams extends
React.Component {
state = {teams:[]}
    getTeams = () => {
        return fetch("https://api.fantasydata.net/v3/nba/stats/json/teams", {
            headers: {
                "Ocp-Apim-Subscription-Key": "7ab4f60ab975432aa99aa6d398b1fe2b"
            }
        })
        .then (results => results.json())
        .then (data => this.setState({
            teams:data
        }))
    }
componentDidMount (){
    this.getTeams ()
}
    render() {
        return (
            <Container>
            <View>
                <Text>Teams</Text>
                <Button title="Pick a Team" onPress={() => Actions.pop()}>Home</Button>
            </View>
    <List dataArray={this.state.teams}
            renderRow={(team) =>
              <ListItem>
                <Text>{team.Name}</Text>
              </ListItem>
            }>
          </List>    
    </Container>
    )
    }
}