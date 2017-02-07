import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  PropTypes
} from 'react-native'
import Record from './Record'
import moment from 'moment'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#bbbbbb'
  }
})

const RecordColumn = React.createClass({
  propTypes: {
    records: React.PropTypes.arrayOf(React.PropTypes.shape({
      startTime: React.PropTypes.object.isRequired,
      endTime: React.PropTypes.object.isRequired,
      clientName: React.PropTypes.string.isRequired,
      serviceNames: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired
    })).isRequired,
    lineHeight: React.PropTypes.number,
    startHour: React.PropTypes.number,
    endHour: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      lineHeight: 40,
      startHour: 0,
      endHour: 24
    }
  },

  render: function() {
    let background = []
    for (let i = this.props.startHour; i < this.props.endHour; ++i) {
      background.push(
        <View
          key = {i}
          style = {[{ height: this.props.lineHeight }, styles.background]}
        />
      )
    }
    let records = []
    for (let i = 0; i < this.props.records.length; ++i) {
      let positon = (this.props.records[i].startTime.getHours() -
        this.props.startHour +
        this.props.records[i].startTime.getMinutes() / 60) *
        this.props.lineHeight
      let estimatedTime = new Date(this.props.records[i].endTime - this.props.records[i].startTime)
      estimatedTime.setHours(estimatedTime.getHours() - 6)
      let height = (estimatedTime.getHours() + estimatedTime.getMinutes() / 60) *
        this.props.lineHeight
      records.push(
        <Record
          key = {i}
          clientName = {this.props.records[i].clientName}
          serviceNames = {this.props.records[i].serviceNames}
          startTime = {this.props.records[i].startTime}
          endTime = {this.props.records[i].endTime}
          style = {{
            height: height,
            position: 'absolute',
            left: 0,
            right: 0,
            top: positon
          }}
        />
      )
    }
    return (
      <View style={{flex: 1}}>
        <View>
          {background}
        </View>
        {records}
      </View>
    )
  }
})

export default RecordColumn
