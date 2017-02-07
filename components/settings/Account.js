import React, {Component} from 'react';
import SelectContacts from 'react-native-contacts-android';
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
import Button from 'react-native-button';

import {style} from '../../style.js';

var Account = React.createClass({
    getInitialState: function() {
	return {

	};
},
    render: function() {
          return(
            <TouchableHighlight
            underlayColor = '#fafafa'>
            <View style ={{flexDirection: 'row',height: style.smallView, justifyContent: 'space-between'}}>
              <View style ={{width:16}}></View>
                <View style ={{flex:1,borderColor:style.backgroundColor, borderBottomColor: style.borderColor, borderWidth: style.borderWidth, flexDirection: 'column', justifyContent: 'center'}}>
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{color:style.colorTextStandart, fontSize: style.activeTextFont}}>Аккаунт</Text>
                    </View>
                </View>
                <View style ={{width:16}}></View>
              </View>
            </TouchableHighlight>
    );
    }
});
module.exports = Account;
