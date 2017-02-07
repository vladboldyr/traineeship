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
import {setName} from '../../actions/setServiceName';

let Nameservices = React.createClass({
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
                    <Text style={{color:'#004d40',fontWeight: 'bold',fontSize:16}}>Название услуги</Text>
                </View>
                <View style={{flex: 1}}>
                    <TextInput style={{flex:1,fontSize:12}}
                               defaultValue= {this.state.name}
                               onChangeText={(name) => {this.props.addName(name)}}>
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
    note:state.services.name,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  addName: (name) => {
      dispatch(setName(name))
    }
  }
}
Nameservices = connect(mapStateToProps, mapDispatchToProps)(Nameservices)
module.exports = Nameservices;
