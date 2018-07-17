import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from
'react-native-router-flux';

export default class Home extends
React.Component {
    render() {
        return (
            <View>
                <Text>Jump Shot</Text>
                <Button title="Enter" onPress={() => Actions.Teams()}>Pick a Team</Button>
            </View> 
        )
    }
}