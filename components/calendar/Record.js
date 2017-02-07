import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  record: {
    backgroundColor: 'rgba(255,196,0,0.87)',
    borderWidth: 2,
    borderColor: 'rgba(255,196,0,0.87)'
  },
  clientName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    height: 20
  },
  serviceName: {
    color: 'white',
    fontSize: 15,
    height: 20
  },
  time: {
    color: 'white',
    fontSize: 13,
    height: 17
  }
})

const Record = React.createClass({
  propTypes: {
    clientName: React.PropTypes.string.isRequired,
    serviceNames: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
    startTime: React.PropTypes.object.isRequired,
    endTime: React.PropTypes.object.isRequired,
    style: React.PropTypes.object
  },

  getDefaultProps: function() {
    return ({
      style : {}
    })
  },

  render: function() {
    let serviceNames = this.props.serviceNames.map(function(serviceName, index) {
      return (
        <Text key = {index} style = {styles.serviceName}>
          {serviceName}
        </Text>
      )
    })
    return (
      <View style = {[this.props.style, styles.record]}>
        <Text style = {styles.clientName}>
          {this.props.clientName}
        </Text>
        <Text style = {styles.time}>
          {this.props.startTime.getHours()}:{this.props.startTime.getMinutes()}
        </Text>
        {serviceNames}
      </View>
    )
  }
})

export default Record
