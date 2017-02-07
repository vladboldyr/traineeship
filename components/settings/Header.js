import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  Text,
  Image,
  View
  }
  from 'react-native';
  import {style} from '../../style.js';

let Header = React.createClass({
    render:function() {
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
                    <Text  style={{color:style.headerTextColor,fontSize:style.headerTextFont,marginLeft:18}}>Настройки</Text>
                 </View>
              </View>
           </View>
        </View>
      );
    }
});
module.exports = Header;
