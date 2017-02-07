import Header from './Header';
import Master from './Master';
import Account from './Account';
import Myservices from './Myservices';
import Schedule from './Schedule';
import Notification from './Notification';
import Synchronization from './Synchronization';
import Help from './Help';


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
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
    TouchableNativeFeedback,
  WebView
} from 'react-native';

import Button from 'react-native-button';

import {style} from '../../style.js';

var Settings = React.createClass({
   getInitialState: function() {
       return {
            dataViewVisible: false,
       };
   },
    func: function() {
        this.setState({
            dataViewVisible: !this.state.dataViewVisible,
        });
    },
    render: function() {
        let dataView = <Text></Text>;
        let withDataView = <Text></Text>;
        if(this.state.dataViewVisible){
            withDataView = <WithDataView/>;
            dataView = <DataView/>;
        }
        return (

            <View style = {{flex: 1,backgroundColor: style.backgroundColor}}>

                <Header navigator={this.props.navigator}/>
                <Master/>
                <ScrollView>
                <Account/>
                <Myservices navigator={this.props.navigator}/>
                <Schedule navigator={this.props.navigator}/>
                <Notification navigator={this.props.navigator}/>
                <Synchronization/>
                <Help/>
                </ScrollView>
            </View>

        );
    }
});

module.exports = Settings;
