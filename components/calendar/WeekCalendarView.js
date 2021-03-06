import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import RecordColumn from './RecordColumn'
import TimePanel from './TimePanel'

const WeekCalendarView = React.createClass({
  propTypes: {
    currentWeek: React.PropTypes.object.isRequired
  },

  render: function() {
    let database = this.props.database
    let days = []
    let currentDay = this.props.currentWeek.toDate()
    currentDay.setHours(0)
    currentDay.setMinutes(0)
    currentDay.setSeconds(0)
    currentDay.setMilliseconds(0)
    let nextDay = new Date(currentDay).setDate(currentDay.getDate() + 1)
    for (let i = 0; i < 3; ++i) {
      let records = database.getRecords({startTime: currentDay, endTime: nextDay}).map(function(record) {
        return {
          startTime: record.startTime,
          endTime: record.endTime,
          clientName: record.client.name,
          serviceNames: record.services.map(function(serviceID) {
            return database.getService(serviceID).name
          })
        }
      })
      days.push(
        <RecordColumn
          key = {i}
          records = {records}
        />
      )
      currentDay = new Date(nextDay)
      nextDay = new Date(currentDay).setDate(currentDay.getDate() + 1)
    }
    return (
      <View>
        <View
          style = {{
            flexDirection: 'row'
          }}
        >
          <TimePanel />
          {days}
        </View>
      </View>
    )
  }
})

export default WeekCalendarView
