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
import {style} from '../../style.js';
import Button from 'react-native-button'

var ByTime = React.createClass({
    render: function() {
      return(
        <TouchableHighlight onPress = {this.props.onPress}
          underlayColor = '#fafafa'>
          <View style ={{flexDirection: 'row',height: style.smallView, justifyContent: 'space-between'}}>
            <View style ={{width:16}}></View>
            <View style ={{flex:1,borderColor:style.backgroundColor, borderBottomColor: style.borderColor, borderWidth: style.borderWidth, flexDirection: 'column', justifyContent: 'center'}}>
              <View style ={{flexDirection: 'row'}}>
                <Text style = {{color:style.colorTextStandart, fontSize: style.activeTextFont}}>По времени</Text>
              </View>
            </View>
            <View style ={{width:16}}></View>
          </View>
        </TouchableHighlight>

      );
    }
});
module.exports = ByTime;
