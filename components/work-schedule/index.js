import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './header'
import MonthCalendar from '../calendar/MonthCalendar'
import WorkTime from './worktime'
import moment from 'moment'
import { connect } from 'react-redux'
import { changeDate } from '../../actions/ChangeDate'

toUpperCaseFirstChar = function(string) {
  if (string == "") {
    return string
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1
  },
  monthContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  month: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

const WorkSchedule = React.createClass({
  getInitialState: function() {
    return {
      date: moment()
    }
  },

  onReturnPress: function() {
    this.props.navigator.pop()
  },

  onEditPress: function() {
    this.props.navigator.push({ page: 'editSchedule' })
  },

  changeDate: function(newDate) {
    this.setState({date: moment(newDate)})
  },

  onDayPress: function(date) {
    this.setState({date: moment(date)})
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <Header
          title = 'График работы'
          onReturnPress = {this.onReturnPress}
          onEditPress = {this.onEditPress}
        />
        <View style = {styles.monthContainer}>
          <Text style = {styles.month}>
            {toUpperCaseFirstChar(this.state.date.format('MMMM'))}
          </Text>
        </View>
        <MonthCalendar
          getDayStatus = {this.props.schedule.getWorkStatus}
          date = {this.state.date}
          changeDate = {this.changeDate}
          onDayPress = {this.onDayPress}
        />
        <WorkTime
          startTime = {this.props.schedule.getStartTime(this.state.date)}
          endTime = {this.props.schedule.getEndTime(this.state.date)}
        />
      </View>
    )
  }
})

mapStateToProps = function(state) {
  return {
    schedule: state.schedule.current
  }
}

WorkSchedule = connect(mapStateToProps)(WorkSchedule)

export default WorkSchedule
