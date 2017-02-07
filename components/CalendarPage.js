import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import Button from 'react-native-button';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux'
import moment from 'moment'
import {style} from '../style'
import DayCalendar from'./calendar/DayCalendar'
import WeekCalendar from'./calendar/WeekCalendar'
import MonthCalendar from'./calendar/MonthCalendar'
import {changeDate} from '../actions/ChangeDate'

let CalendarComp = React.createClass({
  getDayStatus: function(day) {
    const MIDDLE = 1
    const HARD = 3
    let startTime = moment(day)
    startTime.hours(0)
    startTime.minutes(0)
    startTime.seconds(0)
    let endTime = moment(day)
    startTime.hours(23)
    startTime.minutes(59)
    startTime.seconds(59)
    let records = this.props.database.getRecords({startTime: startTime, endTime: endTime})
    result = records.length
    if (result >= MIDDLE) {
      result = 1
    }
    if (result >= HARD) {
      result = 2
    }
    return result
  },

  render: function() {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{
            height: 50,
            backgroundColor:'rgb(3,155,229)',
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: "center",
          }}>

            <View>
              <Button
                containerStyle={{padding: 15, overflow:'hidden'}}
                style={{fontSize: 15, color: '#ffffff'}}>
                Сегодня
              </Button>
            </View>

            <Text style={{color: "#FFFFFF", fontSize: 16,}}>{this.props.date.current.locale('ru').format('DD MMMM YYYY')}</Text>

            <View style={{flexDirection: 'row'}}>
              <View>
                <Button onPress={() => this.props.navigator.push({ page: 'filter' })}
                  containerStyle={{padding: 15, overflow:'hidden'}}
                  style={{fontSize: 15, color: '#ffffff'}}>
                  <Image source={require('../icons/filters.png')} style={{width: 20, height: 20}}/>
                </Button>
              </View>

              <View>
                <Button onPress={() => this.props.navigator.push({ page: 'settings' })}
                  containerStyle={{padding: 15, overflow:'hidden'}}
                  style={{fontSize: 20, color: '#ffffff'}}>
                  <Image source={require('../icons/settings.png')} style={{width: 20, height: 20}}/>
                </Button>
              </View>
            </View>

          </View>

          <ScrollableTabView locked={true} renderTabBar={()=><DefaultTabBar
            underlineColor={style.underlineColor}
            activeTextColor={style.activeTextColor}
            backgroundColor='rgb(3,155,229)'
            inactiveTextColor={style.inactiveTextColor}/>}
          >

            <DayCalendar
              tabLabel="ДЕНЬ"
            />

            <WeekCalendar
              tabLabel="НЕДЕЛЯ"
            />

            <MonthCalendar
              tabLabel="МЕСЯЦ"
              getDayStatus = {this.getDayStatus}
              date = {this.props.date.current}
              changeDate = {this.props.changeDate}

            />
          </ScrollableTabView>

          <ActionButton
            buttonColor='rgb(255,196,0)'
            onPress={() => this.props.navigator.push({ page: "addRecord" })}
          />
        </View>
      );
  }
});
const styles = StyleSheet.create({
  addButtonContainer: {
    backgroundColor: "#00a79b",
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: 'center',
    elevation: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});

const mapStateToProps = (state) => {
  return {
    date: state.date,
    database: state.database
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeDate: (newDate) => {
      dispatch(changeDate(newDate))
    }
  }
}


CalendarPage = connect(mapStateToProps, mapDispatchToProps)(CalendarComp)

export default CalendarPage
