import Button from 'react-native-button';
import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Switch,
    TextInput,
    TouchableHighlight
    }
    from 'react-native';
import CheckBox from 'react-native-checkbox';

import {style} from '../../style.js';

let Typenotification = React.createClass({
  getInitialState: function() {
    return ({
      enable: false,
      checkPush: false,
      checkMail: false,
    });
  },

  render:function() {

        return(
        <View style={{flexDirection:'column',justifyContent: 'space-between'}}>
          <View style={{height: style.smallView, flexDirection:'row',justifyContent: 'space-between'}}>
             <View style={{width: 16}}></View>
             <View style={{flex:1,borderColor:style.backgroundColor, borderBottomWidth: style.borderWidth, borderBottomColor :style.borderColor}}>
               <View style={{flex:1, flexDirection:'column',justifyContent: 'center',}}>
                     <View>
                        <Text style={{color:style.colorTextStandart,fontSize:style.activeTextFont}}>Тип уведомлений</Text>
                     </View>
               </View>
             </View>
             <View style={{width: 16}}></View>
          </View>

          <View style={{height:style.bigView, flexDirection:'row',justifyContent: 'space-between'}}>
             <View style={{width: 16}}></View>

             <View style={{flex:1,borderColor: style.backgroundColor, borderBottomWidth: style.borderWidth,borderBottomColor :style.borderColor}}>
              <View style={{flex: 1,flexDirection:'column',justifyContent: 'space-between',}}>
               <View style={{marginTop:16,flexDirection:'row',justifyContent: 'space-between',}}>
                     <View>
                        <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont}}>Push-уведомления</Text>
                     </View>
                     <View>
                       <CheckBox
                         checkboxStyle={{height:18, width:18}}
                         containerStyle={{padding:0, paddingBottom:-10, marginRight:5}}
                         label=''
                         checkedImage = {require('./images/checked.png')}
                         uncheckedImage = {require('./images/unChecked.png')}
                         checked={this.state.checkPush}
                         onChange={(value) => this.setState({checkPush: value}) }
                          />
                     </View>
               </View>
               <View style={{marginBottom:16,flexDirection:'row',justifyContent: 'space-between',}}>
                     <View>
                        <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont}}>E-mail</Text>
                     </View>
                     <View>
                       <CheckBox
                         checkboxStyle={{height:18, width:18}}
                         containerStyle={{padding:0, paddingBottom:-10, marginRight:5}}
                         label=''
                         checkedImage = {require('./images/checked.png')}
                         uncheckedImage = {require('./images/unChecked.png')}
                          checked={this.state.checkMail}
                          onChange={(value) => this.setState({checkMail: value}) }
                          />
                     </View>
               </View>
              </View>
             </View>
             <View style={{width: 16}}></View>
          </View>
        </View>
     );
  }
});

module.exports = Typenotification;
