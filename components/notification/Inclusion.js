import Button from 'react-native-button';
import React, { Component } from 'react';
import {
    Text,
    Image,
    Switch,
    View,
    TextInput,
    TouchableHighlight
    }
    from 'react-native';
import SelectContacts from 'react-native-contacts-android';
import CheckBox from 'react-native-checkbox';

import {style} from '../../style.js';

let Inclusion = React.createClass({
  getInitialState: function() {
    return ({
      enable: false,
    });
  },
  render:function() {

        return(
          <View style={{height:style.smallView, flexDirection:'row',justifyContent: 'space-between'}}>
             <View style={{width: 16}}></View>
             <View style={{flex: 1,flexDirection:'column',justifyContent: 'center', borderColor: style.backgroundColor, borderBottomWidth:style.borderWidth, borderBottomColor :style.borderColor}}>
               <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                  <View>
                      <Text style={{color:style.colorTextStandart,fontSize:style.activeTextFont,}}>Включить</Text>
                  </View>
                  <View>
                    <CheckBox
                      checkboxStyle={{height:18, width:32}}
                      containerStyle={{padding:0, paddingBottom:-10}}
                      label=''
                      checkedImage = {require('./images/Switch.png')}
                      uncheckedImage = {require('./images/unSwitch.png')}
                      checked={this.state.enable}
                      onChange={(value) => this.setState({enable: value})}/>
                  </View>
               </View>
             </View>
            <View style={{width: 16}}></View>
          </View>
     );
  }
});

module.exports = Inclusion;
