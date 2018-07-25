import React from 'react'
import { View } from 'react-native'
import { Icon, Container, Header, Content, List, ListItem, Text, Form, Thumbnail, Left, Right, Body, } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
        }
    }
    
    getPlayers = () => {
        const playersURL = "https://api.fantasydata.net/v3/nba/stats/JSON/Players/" + this.props.teamName
        return fetch(playersURL, {
                headers: {
                    "Ocp-Apim-Subscription-Key": "7ba0c58a0e54460b9e35780294afd534"
                }
            })
            .then(results => results.json())
            .then(res => {
                console.log(res)
                return res
            })
            .then(data => this.setState({
                players: data
            }))
    }

    
    componentDidMount() {
        this.getPlayers()
        console.log(this.state.players)
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
                        <Right style={{ marginRight:-250 }}>
                            <Icon name="arrow-forward" />
                        </Right>
                        </Body>
                    </ListItem>
 
                } 
            />
        )
    }
}

export default Players;