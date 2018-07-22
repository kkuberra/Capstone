import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Container, Header, Content, Button, Title } from 'native-base';
import { Actions } from

'react-native-router-flux';


export default class Home extends
React.Component {
    render() {
        return (
                
     <ImageBackground source={require('../bball_floor.jpg')} style={{width: '100%', height: '100%'}}>
                {/* <Text>Jump Shot</Text> */}
                <Image source={require('../Jump.png')} />
                
                <View style = {
                    {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 284
                        // padding: 25,
                        // boxshadow: '0 8px 6px -10px black'
                    }
                }>
                <Button onPress = {() => Actions.Teams()} rounded style={{ padding: 20, height: 55 }}> <Text> Pick a Team </Text> </Button>
                </View>
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

        // const styles = StyleSheet.create({
        //             button: {
                        
        //                 // marginHorizontal: 55,
        //                 // marginTop: 55,
        //                 }
        //             })
