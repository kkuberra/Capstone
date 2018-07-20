import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, List, ListItem, Text, Picker, Form, Thumbnail, Left, Body } from 'native-base';
import SvgUri from 'react-native-svg-uri';

export default class Teams extends
React.Component {
state = {teams:[],
         user:'',
         selected: 0
        }
         updateUser = (value) => {
      this.setState({ selected: value })
   }
    
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

getThumbnail (url){
    if (url.endsWith(".svg")){
        return <SvgUri
      width="20"
      height="20"
      source={{uri:url}}
    />
    }
    else {
        return <Thumbnail square source={{uri:url}} />

    }
}

    render() {
        return (
                <List 
                    dataArray={this.state.teams}
                    renderRow={(team) =>
                        <ListItem thumbnail onPress={() => Actions.players({teamName: team.Key})}>
                            <Left>
                            {this.getThumbnail(team.WikipediaLogoUrl)}
                            </Left>
                            <Body>
                                <Text>{team.Name}</Text>
                            </Body>
                        </ListItem>
                    } 
                />
    )
    }
}
