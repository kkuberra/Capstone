import React from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Form, Thumbnail, Left, Body, } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
        }
        this.getPlayers = this.getPlayers.bind(this)
    }
    

    getPlayers = () => {
        const playersURL = "https://api.fantasydata.net/v3/nba/stats/JSON/Players/" + this.props.teamName
        console.log(playersURL)
        return fetch(playersURL, {
            headers: {
                "Ocp-Apim-Subscription-Key": "7ab4f60ab975432aa99aa6d398b1fe2b"
            }
        })
        .then(results => results.json())
        .then(data => this.setState({
            players: data
        }))
    }
    componentDidMount() {
        this.getPlayers()
    }
    render() {
        return (
            <List 
                dataArray={this.state.players}
                renderRow={(player) =>
                    <ListItem style={{ height:90 }} thumbnail onPress ={() => Actions.stats({Player: player})}>
                        <Left>
                            <Thumbnail square source={{uri: player.PhotoUrl}} />
                        </Left>
                        <Body>
                            <Text>{player.FirstName}  {player.LastName}</Text>
                        </Body>
                    </ListItem>
                } 
            />
        )
    }
}

export default Players;