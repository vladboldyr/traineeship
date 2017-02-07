import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const TimePanel = React.createClass({
  propTypes: {
    startHour: React.PropTypes.number,
    endHour: React.PropTypes.number,
    lineHeight: React.PropTypes.number
  },

  getDefaultProps : function() {
    return {
      startHour: 0,
      endHour: 24,
      lineHeight: 40
    }
  },

  render: function() {
    let hourCells = []
    for (let i = this.props.startHour; i < this.props.endHour; ++i) {
      hourCells.push(
        <View
          key = {i}
          style = {{
            width: 50,
            height: this.props.lineHeight,
            borderColor: '#aaaaaa',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style = {{
              flexDirection: 'row'
            }}
          >
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
              {i}
            </Text>
            <Text style = {{fontSize: 12}}>
              00
            </Text>
          </View>
        </View>
      )
    }
    return (
      <View>
        {hourCells}
      </View>
    )
  }
})

export default TimePanel
