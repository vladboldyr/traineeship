import Button from 'react-native-button';
import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    TextInput
    }
    from 'react-native';
import {connect} from 'react-redux';
import {setNote} from '../../actions/setNote';

let TheNote = React.createClass({
    render:function() {
      return (
        <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between'}}>
           <View style={{flex: 1,flexDirection:'column',marginLeft:16}}>
              <View style={{flex: 1}}>
                 <Text style={{color:'rgba(0,0,0,0.87)',fontSize:16}}>Заметка</Text>
              </View>
              <View style={{flex: 1}}>
                <ScrollView >
                   <TextInput
                     style={{flex:1,fontSize:12}}
                     defaultValue=""
                     editable = {true}
                     multiline = {true}
                     onChangeText={(note) => {this.props.addNote(note)}}>
                   </TextInput>
                </ScrollView>
              </View>
           </View>
        </View>
      );
    }
});
const mapStateToProps = (state) => {
  return {
    note:state.record.note,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  addNote: (note) => {
      dispatch(setNote(note))
    }
  }
}
TheNote = connect(mapStateToProps, mapDispatchToProps)(TheNote)
module.exports = TheNote;
