import React from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Form, Thumbnail, Left, Body, } from 'native-base';
import { Actions } from 'react-native-router-flux';


class Favorites extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
    fetch(favoritesURL)
    .then(res => res.json())
    .then(res => {
        this.setState({
            favorites: res
        })
    })
    }

    render() {
        return (
            <List 
                dataArray={this.state.favorites}
                renderRow={(favorite) => {
                    return (
                        <ListItem style={{ height:90 }} thumbnail onPress ={() => Actions.stats({Player: favorite})}>
                            <Left>
                                <Thumbnail square source={{uri: favorite.image_url}} />
                            </Left>
                            <Body>
                                <Text>{favorite.name}</Text>
                            </Body>
                        </ListItem>
                    )
                }}
            />
               
        )
    }
}

export default Favorites;