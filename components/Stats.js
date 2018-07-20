import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Container, Header, Content, List, ListItem, Form } from 'native-base';
// import { Bar } from 'react-native-pathjs-charts'
// import { Radar } from "react-chartjs";
import { PieChart } from 'react-native-svg-charts'

export default class PieChartWithDynamicSlices extends React.PureComponent {
    state = {
        stats: [],
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
        
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
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
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: 'absolute',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center'
          }}>
          {`${label} \n ${value}`}
        </Text>
      </View>
    )
  }
}




// export default PieChartWithDynamicSlices;
// export default Stats;