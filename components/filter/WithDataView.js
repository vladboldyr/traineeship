import React, {Component} from 'react';

//import ListPopover from 'react-native-list-popover';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
  TextInput,
  Image,
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
  WebView
  }
  from 'react-native';
import Button from 'react-native-button';
import {style} from '../../style.js';


var withTime= '00:00';
var withData='Пн,15 окт,2016';

var WithDataView = React.createClass({
    getInitialState: function () {
      return {
            allDate: new Date(),
            isoFormatText:'00:00',
            allText: 'Пн,15 окт,2016',
      };
    },
    _formatTime(hour, minute) {
      return hour + ':' + (minute < 10 ? '0' + minute : minute);
    },
    async showPickerTime(stateKey, options) {
      try {
        const {action, minute, hour} = await TimePickerAndroid.open(options);
        var newState = {};
        if (action === TimePickerAndroid.timeSetAction) {
          newState[stateKey + 'Text'] = this._formatTime(hour, minute);
          newState[stateKey + 'Hour'] = hour;
          newState[stateKey + 'Minute'] = minute;
        } else if (action === TimePickerAndroid.dismissedAction) {
          newState[stateKey + 'Text'] = withTime;
        }
        this.setState(newState);
      } catch ({code, message}) {
        console.warn(`Error in example '${stateKey}': `, message);
      }
    },
    async showPicker(stateKey, options) {
       let days=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
       let months=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","нояб","дек"];
       try {
        var newState = {};
        const {action, year, month, day} = await DatePickerAndroid.open(options);
        if (action === DatePickerAndroid.dismissedAction) {
          newState[stateKey + 'Text'] = withData;
        } else {
          var date = new Date(year, month, day);
          newState[stateKey + 'Text'] = days[date.getDay()] + "," + day + " " + months[month] + "," + year;
          newState[stateKey + 'Date'] = date;
        }
        this.setState(newState);
      } catch ({code, message}) {
        console.warn(`Error in example '${stateKey}': `, message);
      }
    },
    render: function () {
      withTime = this.state.isoFormatText;
      withData = this.state.allText;
        return (
        <View style ={{height:style.smallView}}>
          <View style ={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
            <View style={{width:16}}></View>
             <View style ={{flex: 1,borderColor:style.backgroundColor, borderWidth: style.borderWidth,borderBottomColor:style.borderColor ,flexDirection: 'column',justifyContent: 'space-between'}}>
              <View style={{marginTop:16}}>
                <Text style = {{color:style.colorTextStandart,fontSize: style.activeTextFont}}>С</Text>
              </View>
              <View style ={{flexDirection: 'row',justifyContent: 'space-between',marginBottom:16,}}>
                  <View>
                     <Text style = {{ fontSize:style.inactiveTextFont}}>
                        {withData}
                     </Text>
                  </View>
                  <View style = {{flexDirection: 'row'}}>
                     <View>
                        <Button onPress={this.showPicker.bind(this, 'all', {date: this.state.allDates})}
                                containerStyle={{padding:10,  overflow:'hidden'}}
                                style={{fontSize: 20, color: 'white'}}>
                                  <View>
                                    <Image style = {{width: 13, height: 10}}
                                           source = {require('./image/play-button.png')}/>
                                  </View>
                        </Button>
                     </View>
                        <Text style = {{fontSize:style.inactiveTextFont, marginTop:5, marginRight:10}}>{this.state.isoFormatText}</Text>
                        <View>
                            <Button onPress={this.showPickerTime.bind(this, 'isoFormat', {
                                    hour: this.state.isoFormatHour,
                                    minute: this.state.isoFormatMinute,
                                    is24Hour: true,})}
                                    containerStyle={{padding:10, overflow:'hidden'}}
                                    style={{fontSize: 25, color: 'white'}}>
                                      <View>
                                        <Image style = {{width: 13, height: 10, flexDirection: 'row'}}
                                               source = {require('./image/play-button.png')}/>
                                      </View>
                            </Button>
                        </View>
                  </View>
              </View>
            </View>
            <View style={{width:16}}></View>
          </View>
          </View>
        );
    }
});
module.exports = WithDataView;
