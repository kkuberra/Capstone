import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Form, Body, Thumbnail, Card,
  CardItem } from 'native-base';
// import { Bar } from 'react-native-pathjs-charts'
// import { Radar } from "react-chartjs";
import { PieChart } from 'react-native-svg-charts'

export default class PieChartWithDynamicSlices extends React.PureComponent {
    state = {
        stats: null,
        selectedSlice: {
            value: "",
            label: ""
        },

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
      console.log(data)
      const {Player} = this.props
      
      return (
          < View style = {
              {
                //   flex: 1,
                //   flexDirection: 'row',
                  justifyContent: 'center',
                //   alignItems: 'center',
              }
          } >
          
   
        
        <Text style={{ marginTop:45, marginLeft:100, marginBottom:50, fontSize: 25 }}><Thumbnail style={{ height:90 }} square source={{uri: Player.PhotoUrl}} />{Player.FirstName}  {Player.LastName}</Text>
     
        <PieChart
          style={{ height: 300 }}
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
    
   
    
    </View>

    )
      };  
      
      
    }





// export default PieChartWithDynamicSlices;
// export default Stats;