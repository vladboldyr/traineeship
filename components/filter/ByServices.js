import React, {Component} from 'react';
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
import {loadServices} from '../../actions/actionPost';
import {style} from '../../style.js';


class ByServices extends Component {
  onClickOnServices(){
    this.props.wouldLoadServices();
    this.props.onPress();
  //this.props.navigator.push({page: 'serviceSelectPage'});
  }
  render() {
    return(
      <TouchableHighlight onPress = {() => this.onClickOnServices()}
        underlayColor = '#fafafa'>
        <View style ={{flexDirection: 'row',height: style.smallView, justifyContent: 'space-between'}}>
          <View style ={{width:16}}></View>
          <View style ={{flex:1,borderColor:style.backgroundColor, borderBottomColor: style.borderColor, borderWidth: style.borderWidth, flexDirection: 'column', justifyContent: 'center'}}>
            <View style ={{flexDirection: 'row'}}>
              <Text style = {{color:style.colorTextStandart, fontSize: style.activeTextFont,fontFamily:'roboto'}}>По услугам</Text>
              <Text style = {{color:style.colorTextStandart,fontSize: style.inactiveTextFont, fontWeight: 'bold', marginLeft:20}}></Text>
            </View>
          </View>
          <View style ={{width:16}}></View>
        </View>
      </TouchableHighlight>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    services:state.services,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    wouldLoadServices: () => {
      dispatch(loadServices(10))
    }
  }
}

ByServices = connect(mapStateToProps, mapDispatchToProps)(ByServices)

export default ByServices;
