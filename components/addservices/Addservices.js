import React, {Component} from 'react';
import Header from './Header';
import Nameservices from './Nameservices';
import Priceservices from './Priceservices';
import Timeservices from './Timeservices';
import Addgroups from './Addgroups';
import Groups from './Groups';

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
import Button from 'react-native-button'


var Addservices = React.createClass({
   getInitialState: function() {
       return {
            groupsViewVisible: false,
       };
   },
   func: function() {
        this.setState({
            groupsViewVisible: !this.state.groupsViewVisible,
        });
   },
   render: function() {
        let GroupsView = <Text></Text>;
        if(this.state.groupsViewVisible){
            GroupsView = <Groups/>;
        }
      return (
         <View style = {{flex: 1,backgroundColor:'#ffffff'}}>
              <Header navigator={this.props.navigator}/>
              <Nameservices/>
              <Priceservices/>
              <Timeservices/>
              <Addgroups onPress={() => this.func()}/>
                {GroupsView}
         </View>
      );
   }
});

module.exports = Addservices;
