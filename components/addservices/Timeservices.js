import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableHighlight
  }
  from 'react-native';
import SelectContacts from 'react-native-contacts-android';
import {connect} from 'react-redux';
import {setEstimatedTime} from '../../actions/setServiceEstimatedTime';

let Timeservices = React.createClass({
  getInitialState: function() {
	  return {
      name: "",
	    text: ''
    };
  },
  render:function() {
    return(
      <View style={{borderColor: '#eeeeee', borderWidth: 0.5}}>
         <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{flex: 1,flexDirection:'column',marginLeft:16}}>
               <View style={{flex: 1}}>
                   <Text style={{color:'#004d40',fontWeight: 'bold',fontSize:16}}>Длительность услуги</Text>
               </View>
               <View style={{flex: 1}}>
                  <TextInput style={{flex:1,fontSize:12}}
                      keyboardType='numeric'
                      defaultValue= {this.state.name}
                      onChangeText={(estimatedTime) => {this.props.addEstimatedTime(estimatedTime)}}>
                  </TextInput>
               </View>
            </View>
         </View>
      </View>
    );
  }
});
const mapStateToProps = (state) => {
  return {
    note:state.services.estimatedTime,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  addEstimatedTime: (estimatedTime) => {
      dispatch(setEstimatedTime(estimatedTime))
    }
  }
}
Timeservices = connect(mapStateToProps, mapDispatchToProps)(Timeservices)
module.exports = Timeservices;
