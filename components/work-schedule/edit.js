import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderEdit from './headeredit'
import MonthCalendar from '../calendar/MonthCalendar'
import WorkTimeEdit from './worktimeedit'
import moment from 'moment'
import { connect } from 'react-redux'
import { changeDate } from '../../actions/ChangeDate'
import { setSchedule } from '../../actions/schedule'
import { WeeklySchedule } from './schedule'

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

const EditSchedule = React.createClass({
  getInitialState: function() {
    return {
      date: moment()
    }
  },

  onReturnPress: function() {
    this.props.navigator.pop()
  },

  changeDate: function(newDate) {
    this.setState({date: moment(newDate)})
  },

  onDayPress: function(date) {
    this.setState({date: moment(date)})
  },

  onChangeDays: function(days) {
    this.props.setSchedule(new WeeklySchedule(days, moment(this.state.date), moment(this.state.date)))
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <HeaderEdit
          title = 'Редактирование'
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
          schedule = {this.props.schedule}
        />
        <WorkTimeEdit
          startTime = {this.props.schedule.getStartTime(this.state.date)}
          endTime = {this.props.schedule.getEndTime(this.state.date)}
          onChangeDays = {this.onChangeDays}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setSchedule: (schedule) => {
      dispatch(setSchedule(schedule))
    }
  }
}

EditSchedule = connect(mapStateToProps, mapDispatchToProps)(EditSchedule)

export default EditSchedule
