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
                "Ocp-Apim-Subscription-Key": "7ba0c58a0e54460b9e35780294afd534"
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

getThumbnail(url){
    if (url.endsWith(".svg")){
        return <SvgUri
      width="50"
      height="50"
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
                        <ListItem style={{ height:90 }} thumbnail onPress={() => Actions.players({teamName: team.Key})}>
                            <Left style={{ display:"flex", justifyContent:"center", alignItems:"center", width:50, height:60 }}>
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
