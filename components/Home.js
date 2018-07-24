import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Container, Header, Content, Button, Title } from 'native-base';
import { Actions } from

'react-native-router-flux';


export default class Home extends
React.Component {
    render() {
        return (
              <View>
                <ImageBackground source={require('../hardwood.png')} style={{width: '100%', height: '60%', marginTop:90}}>
                    {/* <Text>Jump Shot</Text> */}
                    <View style={styles.buttonCon}>
                    <Image source={require('../Jump.png')} style={styles.logo} /> 
                    </View>
                    <View style={styles.buttonCon}>
                        <Button onPress = {() => Actions.Teams()} rounded style={styles.buttons}> 
                            <Text style ={styles.text}> Pick a Team </Text>
                        </Button>
                        <Button onPress = {() => Actions.favorites()} rounded style={styles.buttons}> 
                            <Text style={styles.text}> Jump to Favorites </Text> 
                        </Button>
                    </View>
                </ImageBackground>
             </View>
    )}
}
const styles = StyleSheet.create({
    buttons: {
        alignSelf: 'center',
        padding: 15,
        height: 55,
        marginTop: 190,
        marginBottom: -163
    },
    buttonCon:{
            flex: 1,
            flexDirection: 'column',
            alignSelf: 'center'
    },
    text:{
        fontSize: 20,
        color: 'white'
    },
    logo:{
        marginTop: -30
    }
})
