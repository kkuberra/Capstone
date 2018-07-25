import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Thumbnail, Button } from 'native-base';
import { PieChart } from 'react-native-svg-charts'
import { Actions } from 'react-native-router-flux'

const favoritesURL = 'https://jumpshotserver.herokuapp.com/api/v1/favorites'

export default class PieChartWithDynamicSlices extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            stats: null,
            selectedSlice: {
                value: "",
                label: ""
            },
        }
    }

    removeAndRedirect = (id) => {
        fetch(favoritesURL + id, {
            method: "DELETE"
        }).then(() => Actions.favorites())
    }

    addAndRedirect() {
        fetch(favoritesURL, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.props.Player.FirstName + ' ' + this.props.Player.LastName,
                    player_id: this.props.Player.PlayerID,
                    image_url: this.props.Player.PhotoUrl
                }),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
            .then(res => res.json())
            .then(() => {
                Actions.favorites()
            })
    }
    

    getStats = () => {
        return fetch("https://api.fantasydata.net/v3/nba/stats/JSON/PlayerSeasonStatsByPlayer/2018/" + this.props.Player.PlayerID, {
            headers: {
                "Ocp-Apim-Subscription-Key": "7ba0c58a0e54460b9e35780294afd534"
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
        const {stats} = this.state
        if (!stats){
            return null;
        }

    

    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['Assists %', 'Turn Over %', 'Three Pointers %', 'Two Pointers %', 'Field Goals %'];
    const values = [
        stats.AssistsPercentage,
        stats.TurnOversPercentage,
        stats.ThreePointersPercentage,
        stats.TwoPointersPercentage,
        stats.FieldGoalsPercentage
    ];
    const colors = ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
          onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
        }
      })
    const deviceWidth = Dimensions.get('window').width
      const Player = this.props.Player 
      return (
          < View style = {
              {
                //   flex: 1,
                //   flexDirection: 'row',
                  justifyContent: 'center',
                //   alignItems: 'center',
              }
          } >
          
   
        
        <Text style={{ marginTop:25, marginLeft:100, marginBottom:50, fontSize: 25 }}><Thumbnail style={{ height:90 }} square source={{uri: Player.PhotoUrl}} />{Player.FirstName}  {Player.LastName}</Text>
     
        <PieChart
          style={{ height: '40%' }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
            
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            // position: 'center',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center',
            fontSize: 25,
            marginBottom: 100
          }}>
          {`${label} \n ${value}`}
        </Text>
    <View style = {
                    {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginTop: 100
                    }
                }>
                {this.props.favorited || <Button onPress = {() => this.addAndRedirect()} rounded style={{ padding: 20, height: 55, marginTop: -60 }}> <Text style={{ fontSize: 20, color: 'white' }}> Add to Favorites </Text> </Button>}
                {!this.props.favorited || <Button onPress = {() => this.removeAndRedirect(this.props.Player.id)} rounded style={{ padding: 20, height: 55, marginTop: -60 }}> <Text style={{ fontSize: 20, color: 'white' }}> Remove from Favorites </Text> </Button>}
                </View>
    </View>
    
            )

    };  
}