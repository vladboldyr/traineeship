import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './header'
import MonthCalendar from '../calendar/MonthCalendar'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    marginTop: 16
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  timeContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
})

const WorkTime = React.createClass({
  propTypes: {
    startTime: React.PropTypes.object.isRequired,
    endTime: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <View style = {styles.titleContainer}>
          <Text>
            График работы
          </Text>
        </View>
        <View style = {styles.timeContainer}>
          <Text>
            C
          </Text>
          <Text>
            {this.props.startTime.format("kk:mm")}
          </Text>
          <Text>
            До
          </Text>
          <Text>
            {this.props.endTime.format("kk:mm")}
          </Text>
        </View>
      </View>
    )
  }
})

export default WorkTime
