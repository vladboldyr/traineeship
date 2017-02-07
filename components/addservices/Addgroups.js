import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback
  }
  from 'react-native';
import SelectContacts from 'react-native-contacts-android';

let Addgroups = React.createClass({
  getInitialState: function() {
	  return {
      name: "Введите цену",
	    text: ''
    };
  },
  render:function() {
    return (
      <TouchableNativeFeedback onPress = {this.props.onPress}
                               background = {TouchableNativeFeedback.SelectableBackground()}>
         <View style={{borderColor: '#eeeeee', borderWidth: 0.5}}>
            <View style={{marginTop:10, height:30,flexDirection:'row',justifyContent: 'space-between'}}>
               <View style={{marginLeft:16}}>
                  <Text style={{color:'#004d40',fontWeight: 'bold',fontSize:16}}>Добавить в группу</Text>
               </View>
               <View>
                  <Button onPress = {this.props.onPress}
                          containerStyle={{padding:10, overflow:'hidden'}}
                          style={{fontSize: 20, color: 'white'}}>
                              <View>
                                  <Image style = {{width: 10, height: 10, flexDirection: 'row'}}
                                         source = {require('./image/play-button.png')}/>
                              </View>
                  </Button>
               </View>
            </View>
         </View>
      </TouchableNativeFeedback>
    );
  }
});
module.exports = Addgroups;
