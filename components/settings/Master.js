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
  TouchableHighlight,
  TouchableNativeFeedback,
  WebView
} from 'react-native';
import Button from 'react-native-button'

import {style} from '../../style.js';


var Master = React.createClass({
    getInitialState: function() {
	return {
    name:"Владислав Булатников",
    poffesion:"Репетитор",

	};
},
    selectContact: function(){
        var that = this;
        SelectContacts.picker(function(contact){
            if(contact.resultCode != 0){
                that.setState({

            })}
        });
    },
    render: function() {
          return(
            <TouchableHighlight
              underlayColor = '#fafafa'>
            <View style ={{height: style.bigView, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style ={{width:16}}></View>
                <View style ={{flex:1, flexDirection: 'column', borderColor: style.backgroundColor, borderBottomColor: style.borderColor, borderWidth: style.borderWidth, justifyContent: 'center'}}>
                  <View style ={{flexDirection: 'row'}}>
                    <View>
                      <Image style={{height:50,width:50,borderRadius: 25}}
                      source = {require('./image/master.jpeg')}/>
                    </View>
                    <View style ={{flexDirection: 'column', justifyContent: 'center'}}>
                        <View>
                        <Text style = {{color:style.colorTextStandart,fontSize: style.activeTextFont, marginLeft:16, flexDirection: 'column', justifyContent: 'space-between'}}>{this.state.name}</Text>
                        </View>
                        <View>
                        <Text style = {{color:style.colorTextStandart,fontSize: style.inactiveTextFont, marginLeft:16}}>{this.state.poffesion}</Text>
                        </View>
                    </View>
                  </View>
                </View>
              <View style ={{width:16}}></View>
            </View>
          </TouchableHighlight>
    );}
});
module.exports = Master;
