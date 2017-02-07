import Button from 'react-native-button';
import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Switch,
    TextInput,
    Modal,
    ScrollView,
    TouchableHighlight,
    TouchableNativeFeedback,
    ListView,
    Picker,
    TimePickerAndroid,
    }
    from 'react-native';
import CheckBox from 'react-native-checkbox';

import {style} from '../../style.js';

let Typenotification = React.createClass({
  getInitialState: function() {

    return ({
      enable: false,
      checkPush: false,
      checkMail: false,
      modalVisible: false,
      enabledPicker:false,
      isoFormatText:'20',

    });
  },

  setModalVisible(visible) {
   this.setState({modalVisible: visible});
  },


  Minute(visible) {
   this.setState({isoFormatText: visible});
   this.setModalVisible(false);
  },



  render:function() {
        return(
          <View style={{flexDirection:'column',justifyContent: 'space-between'}}>
            <View style={{height: style.smallView, flexDirection:'row',justifyContent: 'space-between'}}>
              <View style={{width: 16}}></View>
               <View style={{flex:1,borderColor: style.backgroundColor, borderBottomWidth: style.borderWidth,borderBottomColor :style.borderColor}}>
                 <View style={{flex:1, flexDirection:'column',justifyContent: 'center',}}>
                   <View>
                     <Text style={{color:style.colorTextStandart,fontSize:style.activeTextFont}}>О следующей записи</Text>
                   </View>
                 </View>
               </View>
              <View style={{width: 16}}></View>
            </View>

            <View style={{height:style.smallView,flexDirection:'row',justifyContent: 'space-between'}}>
              <View style={{width: 16}}></View>
               <View style={{flex: 1,flexDirection:'column',justifyContent: 'center', borderColor: style.backgroundColor, borderBottomWidth:style.borderWidth,borderBottomColor :style.borderColor}}>
                 <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                    <View>
                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>Напомнить за</Text>
                    </View>
                    <View>
                      <Text style={{color:style.colorTextStandart,fontSize:style.activeTextFont,}}>{this.state.isoFormatText} мин.</Text>
                    </View>
                    <View style={{flexDirection:'column',justifyContent: 'center',}}>
                      <Button
                        onPress={() => {
                        this.setModalVisible(true)}}
                        containerStyle={{overflow:'hidden'}}>
                          <Image style={{width:14,height: 12, marginRight:10}}
                            source={require('./images/play-button-yellow.png')}/>
                       </Button>
                     </View>
                 </View>
               </View>
               <View style={{width: 16}}></View>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Modal
                 animationType={"slide"}
                 transparent={true}
                 visible={this.state.modalVisible}
                 onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}>
                   <View style={{flex:1, justifyContent: 'center',}}>
                     <View style={{ flex: 1,
                       justifyContent: 'center',
                       padding: 20,backgroundColor: style.borderColor,}}>
                        <View style={{height:300,backgroundColor: style.backgroundColor, padding: 20}}>

                        <View>
                          <ScrollView>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('5')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor, borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>5 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('10')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor,borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>10 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('20')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor,borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>20 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('30')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor,borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>30 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('40')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor,borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>40 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('50')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor,borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>50 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => {
                              this.Minute('60')}}>
                                    <View style={{flex: 1,height:30,borderColor:style.borderColor,borderBottomWidth: 0.5, flexDirection: "column",justifyContent: "center"}}>
                                      <Text style={{color:style.colorTextStandart,fontSize:style.inactiveTextFont,}}>60 мин</Text>
                                    </View>
                            </TouchableNativeFeedback>
                            </ScrollView>
                           </View>

                               <View style = {{marginTop:20, flexDirection: "row", justifyContent: "flex-end"}}>
                                 <Button onPress={() => {
                                   this.setModalVisible(!this.state.modalVisible)}}
                                   containerStyle={{overflow:'hidden'}}>
                                   <Text style = {{color:style.colorTextStandart, marginTop:20, marginLeft:16, marginRight:16,}}>Отмена</Text>
                                   </Button>
                               </View>
                         </View>
                       </View>
                 </View>
              </Modal>
            </View>
        </View>
     );
  }
});

module.exports = Typenotification;
