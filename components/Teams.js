import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, List, ListItem, Text, Picker, Form } from 'native-base';

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
    render() {
        return (
            // <Container>
            //     <Content>
            //         <Form>
            //             <Picker mode='dropdown' note selectedValue={this.state.selected} onValueChange = {this.updateUser}>
            //                 <Text>Teams</Text>
            //                 <Button title="Pick  Team" onPress={() => Actions.pop()}>Home</Button>
            //                 {this.state.teams.map((team, i) => {
            //                     return <Picker.Item label={team.Name} value={i} key={i}/>
            //                 })}
            //             </Picker>
            //         </Form>   
            //     </Content>
                <List 
                    dataArray={this.state.teams}
                    renderRow={(team) =>
                        <ListItem onPress={() => Actions.players()}>
                            <Text>{team.Name}</Text>
                        </ListItem>
                    } 
                />
            // </Container>
            // <Container>
            //     <Header />
            //     <Content>
            //     <Form>
            //         <Picker
            //         mode="dropdown"
            //         iosHeader="Select your SIM"
            //         style={{ width: 120 }}
            //         selectedValue={'key1'}
            //         onValueChange={this.updateUser}
            //         >
            //         <Picker.Item label="Wallet" value="key0" />
            //         <Picker.Item label="ATM Card" value="key1" />
            //         <Picker.Item label="Debit Card" value="key2" />
            //         <Picker.Item label="Credit Card" value="key3" />
            //         <Picker.Item label="Net Banking" value="key4" />
            //         </Picker>
            //     </Form>
            //     </Content>
            // </Container>
    )
    }
}



// class PickerWithIconStyle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: "key1"
//     };
//   }
//   onValueChange(value: string) {
//     this.setState({
//       selected: value
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Form>
//             <Picker
//               mode="dropdown"
//               iosHeader="Select your SIM"
//               iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
//               style={{ width: undefined }}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this)}
//             >
//               <Picker.Item label="Wallet" value="key0" />
//               <Picker.Item label="ATM Card" value="key1" />
//               <Picker.Item label="Debit Card" value="key2" />
//               <Picker.Item label="Credit Card" value="key3" />
//               <Picker.Item label="Net Banking" value="key4" />
//             </Picker>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }