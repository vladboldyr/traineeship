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

let Soundvibration = React.createClass({
  getInitialState: function() {
    return ({
      enable: false,
      checkSoun: false,
      checkVibr: false,
    });
  },

  render:function() {

        return(
          <View style={{flexDirection:'row',justifyContent: 'space-between', height: style.bigView}}>
             <View style={{width: 16}}></View>
             <View style={{flex: 1,borderColor: style.backgroundColor, borderBottomWidth: style.borderWidth,borderBottomColor :style.borderColor}}>
              <View style={{flex: 1, flexDirection:'column',justifyContent: 'space-between',}}>
               <View style={{marginTop: 16, flexDirection:'row',justifyContent: 'space-between',}}>
                     <View>
                        <Text style={{color:style.colorTextStandart,fontSize:style.activeTextFont,}}>Звук</Text>
                     </View>
                     <View>
                       <CheckBox
                         checkboxStyle={{height:18, width:18}}
                         containerStyle={{padding:0, paddingBottom:-10, marginRight:5}}
                         label=''
                         checkedImage = {require('./images/checked.png')}
                         uncheckedImage = {require('./images/unChecked.png')}
                         checked={this.state.checkSoun}
                         onChange={(value) => this.setState({checkSoun: value}) }
                          />
                     </View>
               </View>
               <View style={{marginBottom:16 ,flexDirection:'row',justifyContent: 'space-between',}}>
                     <View>
                        <Text style={{color:style.colorTextStandart,fontSize:style.activeTextFont}}>Вибрация</Text>
                     </View>
                     <View>
                       <CheckBox
                         checkboxStyle={{height:18, width:18}}
                         label=''
                         containerStyle={{padding:0, paddingBottom:-10, marginRight:5}}
                         checkedImage = {require('./images/checked.png')}
                         uncheckedImage = {require('./images/unChecked.png')}
                         checked={this.state.checkVibr}
                         onChange={(value) => this.setState({checkVibr: value})}
                          />
                     </View>
               </View>
              </View>
             </View>
             <View style={{width: 16}}></View>
          </View>
     );
  }
});

module.exports = Soundvibration;
