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
    TouchableNativeFeedback,
    TouchableHighlight,
  WebView
} from 'react-native';
import {connect} from 'react-redux';
import Button from 'react-native-button'

import {loadServices} from '../../actions/actionPost';
import {style} from '../../style.js';

class Myservices extends Component {

  onClickOnServices(){
    this.props.wouldLoadServices();
    this.props.navigator.push({page: 'serviceSelectPage'});
  }


    render() {
          return(
            <TouchableHighlight onPress={() => this.onClickOnServices()}
            underlayColor = '#fafafa'>
            <View style ={{flexDirection: 'row',height: style.smallView, justifyContent: 'space-between'}}>
              <View style ={{width:16}}></View>
                <View style ={{flex:1,borderColor:style.backgroundColor, borderBottomColor: style.borderColor, borderWidth: style.borderWidth, flexDirection: 'column', justifyContent: 'center'}}>
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{color:style.colorTextStandart, fontSize: style.activeTextFont, fontFamily:'roboto'}}>Мои услуги</Text>
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

Myservices = connect(mapStateToProps, mapDispatchToProps)(Myservices)

export default Myservices;
