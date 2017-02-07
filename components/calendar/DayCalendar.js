import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import DayCalendarView from './DayCalendarView'
import {connect} from 'react-redux'
import moment from 'moment'
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated'
import { changeDate } from '../../actions/ChangeDate'

const DayCalendar = React.createClass({
  onSwipe: function(index) {
    let that = this;
    setTimeout(function() {
      let newDay = moment(that.props.date.current).add(index - 1, 'd')
      that.props.changeDateFunc(newDay)
    }, 300)
  },

  render: function() {
    let pages = []
    for (let i = 0; i < 3; ++i) {
      let date = moment(this.props.date.current)
      date.add((i - 1) * 7, 'd')
      pages.push(
        <DayCalendarView
          key = {i}
          currentDay = {date}
          database = {this.props.database}
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
    )
    return (
      <ScrollView>
        {content}
      </ScrollView>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    date: state.date,
    database: state.database
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDateFunc: (newDate) => {
      dispatch(changeDate(newDate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayCalendar);
