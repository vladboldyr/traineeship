import React, {Component} from 'react';
import SelectContacts from 'react-native-contacts-android';

//import ListPopover from 'react-native-list-popover';
import {
  AppRegistry,
  Text,
  View,
  ListView,
  StyleSheet,
  TextInput,
  Image,
    TouchableNativeFeedback,
    TouchableHighlight,
  WebView
} from 'react-native';

import {
  Select,
  Option,
  OptionList
}from 'react-native-selectme';

import Button from 'react-native-button'

var Help = React.createClass({
    getInitialState: function() {
	return {
	};
},

    render: function() {
          return(
          <TouchableHighlight
            underlayColor = '#fafafa'>
            <View style ={{flexDirection: 'row',height: 48, justifyContent: 'space-between',}}>
              <View style ={{width:16}}></View>
                <View style ={{flex:1,borderColor:'#fafafa', borderBottomColor: 'rgba(0,0,0,0.1)', borderWidth: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{color:'rgba(0,0,0,0.54)',fontSize: 16}}>О программе и помощь</Text>
                    </View>
                </View>
                <View style ={{width:16}}></View>
              </View>
          </TouchableHighlight>
    );
    }
});
module.exports = Help;
