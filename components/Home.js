import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, styles, } from 'react-native';
import { Actions } from

'react-native-router-flux';


export default class Home extends
React.Component {
    render() {
        return (
     <ImageBackground source={require('../bball_floor.jpg')} style={{width: '100%', height: '100%'}}>
                <Text>Jump Shot</Text>
                <Button Primary title="Pick a Team" onPress={() => Actions.Teams()}></Button>
               
                {/* <View style={styles.homeView}> */}
                     {/* <Button
                        onPress={() => Actions.Teams()}
                        title='Pick a Team'
                        buttonStyle={{
                            backgroundColor: "#2089dcd6",
                            // width: 300,
                            // height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        /> */}
                {/* </View> */}
            </ImageBackground>
              
        
        )}
}
