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
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
  WebView
  }
  from 'react-native';
import Button from 'react-native-button'
import {style} from '../../style.js';


var ByClient = React.createClass({
  getInitialState: function() {
	  return {
      name: "Имя клиента",
      phones: [123,321],
	  };
  },
  selectContact: function(){
    var that = this;
    SelectContacts.picker(function(contact){
      if(contact.resultCode != 0){
                that.setState({
                name: contact.name,
                phones: contact.phones,
            })}
        });
  },
  render: function() {
    return (
      <TouchableHighlight onPress = {() => this.selectContact()}
         underlayColor = '#fafafa'>
         <View style ={{flexDirection: 'row',height: style.smallView, justifyContent: 'space-between'}}>
            <View style ={{width:16}}></View>
             <View style ={{flex:1,borderColor:style.backgroundColor, borderBottomColor: style.borderColor, borderWidth: style.borderWidth, flexDirection: 'column', justifyContent: 'center'}}>
                 <View style ={{flexDirection: 'row'}}>
                     <Text style = {{color:style.colorTextStandart, fontSize: style.activeTextFont}}>По клиентам</Text>
                     <Text style = {{color:style.colorTextStandart,fontSize: style.inactiveTextFont, fontWeight: 'bold', marginLeft:20}}>{this.state.name}</Text>
                 </View>
             </View>
             <View style ={{width:16}}></View>
          </View>
      </TouchableHighlight>
    );
  }
});
module.exports = ByClient;
