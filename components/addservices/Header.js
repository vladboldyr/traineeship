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
import {connect} from 'react-redux';


var Header = React.createClass({
  onClickOnRecord: function(){
    //this.props.LoadRecord();
    //alert(this.props.services.name);
    this.props.database.addServices(this.props.services);
    this.props.navigator.pop();
  },
    render: function() {
      return(
        <View style = {{height: 54, backgroundColor: '#039be5', flexDirection: 'row', justifyContent: 'space-between'}}>
           <View style = {{flexDirection: 'column',justifyContent: 'center', marginLeft:16}}>
              <Button onPress={() => this.props.navigator.pop()}
                      containerStyle={{overflow:'hidden'}}
                      style={{fontSize: 20, color: 'white'}}>
                        <View>
                            <Image style = {{ width: 16, height: 16, flexDirection: 'row'}}
                                   source = {require('./image/left-arrow.png')}/>
                        </View>
              </Button>
           </View>
           <View style = {{flexDirection: 'column',justifyContent: 'center'}}>
              <Text style = {{color: '#ffffff',fontSize: 20,fontWeight: 'bold',textAlign: 'center'}}>Добавить услугу</Text>
           </View>
           <View style = {{flexDirection: 'column',justifyContent: 'center', marginRight:16 }}>
                <Button onPress={() => {this.onClickOnRecord()}}
                      containerStyle={{overflow:'hidden'}}
                      style={{fontSize: 20, color: 'white'}}>
                          <View>
                              <Image style = {{width: 16, height: 16,justifyContent:'flex-end',flexDirection: 'row'}}
                                source = {require('./image/verification-mark1.png')}/>
                          </View>
                </Button>
           </View>
        </View>
      );
    }
});

const mapStateToProps = (state) => {
  return {
    services:state.service,
    database: state.database,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    LoadRecord: () => {
      dispatch(addRecord())
    }
  }
}
Header = connect(mapStateToProps, mapDispatchToProps)(Header)

module.exports = Header;
