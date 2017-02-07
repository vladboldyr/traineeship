import React from "react";
import {StyleSheet, Text, View, ScrollView, TouchableHighlight} from "react-native";
import moment from "moment";
import {connect} from "react-redux";
import SwipeableViews from "react-swipeable-views/lib/index.native.animated";


const Day = React.createClass({
  propTypes: {
    date: React.PropTypes.object.isRequired,
    show: React.PropTypes.bool,
    status: React.PropTypes.number,
    onPress: React.PropTypes.func
  },

  render: function() {
    if (this.props.show) {
      return (
        <View
          style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <TouchableHighlight onPress = {() => {this.props.onPress(this.props.date)}}>
            <View style = {{
              width: 30,
              height: 30,
              borderRadius: 20,
              backgroundColor: 'rgba(255,196,0,' + this.props.status / 2 + ')',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text>
                {this.props.date.date()}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View
          style = {{
            flex: 1
          }}
        >
        </View>
      )
    }
  }
})

const Week = React.createClass({
  propTypes: {
    time: React.PropTypes.object.isRequired,
    onDayPress: React.PropTypes.func
  },

  render: function() {
  
    let days = [];
    let currentTime = moment(this.props.time).isoWeekday(1);
    for (let i = 0; i < 7; ++i) {
      let show = this.props.time.month() == currentTime.month();
      days.push(
        <Day
          key = {i}
          date = {moment(currentTime)}
          show = {show}
          status = {this.props.schedule.getWorkStatus(moment(currentTime))}
          onPress = {this.props.onDayPress}
        />
      );
      currentTime.add(1, 'd')
    }
    return(
      <View style = {{flexDirection: 'row'}}>
        {days}
      </View>
    )
  }
});

const Month = React.createClass({
  propTypes: {
    time: React.PropTypes.object,
    onDayPress: React.PropTypes.func
  },

  render: function() {


    let weeks = [];
    let currentTime = moment(this.props.time).date(1);
    for (let i = 0; currentTime.month() == this.props.time.month(); ++i) {
      weeks.push(
        <Week
          key = {i}
          time = {moment(currentTime)}
          getDayStatus = {this.props.getDayStatus}
          onDayPress = {this.props.onDayPress}
          schedule = {this.props.schedule}
        />
      );
      currentTime.add(7, 'd');
      currentTime.day(1)
    }
    return (
      <View>
        {weeks}
      </View>
    )
  }
});

const TopPanel = React.createClass({
  render: function() {
    let weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    let days = [];
    for (let i = 0; i < weekDayNames.length; ++i) {
      days.push(
        <View
          key = {i}
          style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50
          }}
        >
          <Text>
            {weekDayNames[i]}
          </Text>
        </View>
      )
    }
    return (
      <View style = {{flexDirection: 'row'}}>
        {days}
      </View>
    )
  }
});

const MonthCalendar =  React.createClass({
  propTypes: {
    getDayStatus: React.PropTypes.func.isRequired,
    onDayPress: React.PropTypes.func
  },

  onSwipe: function(index) {
    let that = this
    setTimeout(function() {
      let newMonth = moment(that.props.date).add(index - 1, 'month')
      that.props.changeDate(newMonth)
    }, 250)
  },

  render: function() {

    let pages = []
    for (let i = 0; i < 3; ++i) {
      pages.push(
        <Month
          key = {i}
          time = {moment(this.props.date).date(1).add(i - 1, 'months')}
          onDayPress = {this.props.onDayPress}
          getDayStatus = {this.props.getDayStatus}
          schedule = {this.props.schedule}
        />
      )
    }
    let content = []
    content.push(
      <SwipeableViews
        key = {Math.round(Math.random() * 1e9)}
        index = {1}
        onChangeIndex = {(index) => {this.onSwipe(index)}}
      >
        {pages}
      </SwipeableViews>
    );
    return (
      <View>
        <TopPanel />
        {content}
      </View>
    )
  }
});

mapStateToProps = function(state) {
  return {
    schedule: state.schedule.current
  }
};

export default connect(mapStateToProps)(MonthCalendar);
