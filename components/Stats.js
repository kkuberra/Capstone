import React from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Form } from 'native-base';
import { Radar } from 'react-native-pathjs-charts'

class Stats extends React.Component {
    state = {
        stats: [],
    }

    getStats = () => {
        return fetch("https://api.fantasydata.net/v3/nba/stats/JSON/PlayerSeasonStatsByPlayer/2018/20000534", {
            headers: {
                "Ocp-Apim-Subscription-Key": "7ab4f60ab975432aa99aa6d398b1fe2b"
            }
        })
        .then(results => results.json())
        .then(data => this.setState({
            stats: data
        }))
    }
    componentDidMount() {
        this.getStats()
    }
    render() {
        let data = [{
            "speed": 74,
            "balance": 29,
            "explosives": 40    
        }]

        return (
            <View>
            </View>
            // <List 
            //     dataArray={this.state.stats}
            //     renderRow={(stat) =>
            //         <ListItem >
            //             <Text>{stat.TwoPointersPercentage} 3 {stat.ThreePointersPercentage}</Text>
            //         </ListItem>
            //     } 
            // />
        )
    }
}

export default Stats;