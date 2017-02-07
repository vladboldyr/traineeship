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
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
  WebView
  }
  from 'react-native';
import Button from 'react-native-button'
import {style} from '../../style.js';


var Header = React.createClass({
    render: function() {
      return(
        <View style={{flexDirection: 'column'}}>
           <View style={{flexDirection:'row',height: style.headerHeight,alignItems:'center',backgroundColor: style.header ,justifyContent: 'space-between'}}>
              <View style={{flexDirection:'row'}}>
                 <View style={{flexDirection:'column',justifyContent: 'center'}}>
                    <Button onPress={() => {this.props.navigator.pop();}}
                            containerStyle={{overflow:'hidden'}}
                            style={{fontSize: 20,color:'white'}}>
                              <Image style={{width:16,height:16,marginLeft:16}}
                                     source={require('./image/left-arrow.png')}/>
                    </Button>
                 </View>
                 <View style = {{flexDirection: 'column',justifyContent: 'center',marginLeft:30}}>
                    <Text  style={{color:style.headerTextColor,fontSize:style.headerTextFont,marginLeft:18}}>Фильтры</Text>
                 </View>
              </View>
              <View style={{flexDirection:'column',justifyContent: 'center'}}>
                 <Button onPress={() => {this.props.navigator.pop();}}
                         containerStyle={{padding:5,overflow:'hidden'}}
                         style={{fontSize: 10,color:'white'}}>
                           <Image style={{width:12,height: 12,marginRight:16}}
                                  source={require('./image/verification-mark1.png')}/>
                 </Button>
              </View>
           </View>
        </View>
      );
    }
});

module.exports = Header;
