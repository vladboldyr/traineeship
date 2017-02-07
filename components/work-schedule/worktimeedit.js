import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './header'
import MonthCalendar from '../calendar/MonthCalendar'
import CheckBox from 'react-native-checkbox'
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  weekDayContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const WeekDay = React.createClass({
  getInitialState: function() {
    return {
      selected: false
    }
  },

  onSelect: function() {
    let selected = !this.state.selected
    this.setState({selected: selected})
    this.props.onPress(this.props.index, selected)
  },

  render: function() {
    return (
      <View style = {styles.weekDayContainer}>
        <Text>
          {this.props.label}
        </Text>
        <CheckboxField
          selected = {this.state.selected}
          onSelect={this.onSelect}
          checkboxStyle = {{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            borderRadius: 2
          }}
          containerStyle = {{
            margin: 0,
            padding: 0
          }}
        >
        </CheckboxField>
      </View>
    )
  }
})

const WorkTimeEdit = React.createClass({
  getInitialState: function() {
    return {
      days : [false, false, false, false, false, false, false]
    }
  },

  propTypes: {
    startTime: React.PropTypes.object.isRequired,
    endTime: React.PropTypes.object.isRequired
  },

  onDayPress: function(index, state) {
    let days = this.state.days.slice()
    days[index] = state
    this.setState({days: days})
    this.props.onChangeDays(days)
  },

  render: function() {
    let days = []
    for (let i = 0; i < weekDayNames.length; ++i) {
      days.push(
        <WeekDay
          key = {i}
          index = {i}
          label = {weekDayNames[i]}
          onPress = {this.onDayPress}
        />
      )
    }
    return (
      <View style = {styles.container}>
        <View style = {styles.titleContainer}>
          <Text>
            Рабочий график
          </Text>
        </View>
        <View style = {styles.timeContainer}>
          {days}
        </View>
      </View>
    )
  }
})

export default WorkTimeEdit
