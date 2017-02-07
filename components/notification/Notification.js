import Header from './Header';
import Inclusion from './Inclusion';
import Soundvibration from './Soundvibration';
import Typenotification from './Typenotification';
import Timenotification from './Timenotification';
import {style} from '../../style.js';


import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableWithoutFeedback,
  TouchableHighlight,
    TouchableNativeFeedback,
  WebView
} from 'react-native';


import Button from 'react-native-button'


var Notification = React.createClass({

    render: function() {

        return (
            <View style = {{flex: 1,backgroundColor:style.backgroundColor}}>
                <Header navigator={this.props.navigator}/>
                <ScrollView>
                <Inclusion onChange={(value) => alert(value)}/>
                <Soundvibration/>
                <Typenotification/>
                <Timenotification/>
                </ScrollView>
              </View>
        );
    }
});

module.exports = Notification;
