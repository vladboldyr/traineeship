import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  AppRegistry,
  View,
  Navigatorimport,
  Text,
  Image,
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid
  }
  from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {setStartTime} from '../../actions/setStartTime';
import {setEndTime} from '../../actions/setEndTime';
import ru from 'moment/locale/ru';

let DataRecord = React.createClass({
   getInitialState: function () {
     moment.updateLocale('ru', {
        monthsShort : [
          "янв", "фев", "мар", "апр", "май", "июн",
          "июл", "авг", "сен", "окт", "ноя", "дек"
        ]
     });
     let currentTime = moment().toISOString();
     this.props.addStartTime(currentTime);
     this.props.addEndTime(currentTime);
     return {
            text: '0',
            startTime: moment(currentTime),
            endTime: moment(currentTime)
     };
   },
   async showPickerTime(stateKey, options) {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      if (action === TimePickerAndroid.timeSetAction){
          this.state[stateKey + 'Time'].hour(parseInt(hour)).minute(parseInt(minute));
          let ch = String.fromCharCode(stateKey.charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
          this.props['add'+(ch+stateKey.substring(1))+'Time'](this.state[stateKey+'Time'].toISOString());
          //высчитывается разница между маленькими буквами и накладывается код большой буквы,чтоб потом получить S или E
        }
      this.setState({
          text: this.state.text,
          startTime: this.state.startTime,
          endTime: this.state.endTime
      });
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
   },
   async showPicker(stateKey, options) {
     try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction){
        this.state[stateKey + 'Time'].year(parseInt(year)).month(parseInt(month)).date(parseInt(day));
        let ch = String.fromCharCode(stateKey.charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
        this.props['add'+(ch+stateKey.substring(1))+'Time'](this.state[stateKey+'Time'].toISOString());
      }
      this.setState({
          text: this.state.text,
          startTime: this.state.startTime,
          endTime: this.state.endTime
      });
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
   },

    render:function()  {

      return(
        <View>
           <View  style ={{borderColor: '#eeeeee', borderBottomWidth: 0.5}}>
             <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between'}}>
                <View  style ={{flex: 1,flexDirection: 'column',marginLeft:16}}>
                   <View style ={{flex: 1}}>
                      <Text style = {{color:'rgba(0,0,0,0.87)',fontSize: 16}}>С</Text>
                   </View>
                   <View style ={{flex: 1}}>
                      <Text style = {{color:'rgba(0,0,0,0.46)',fontSize: 14}}> {this.state.startTime.format('dd, D MMM, YYYY')}</Text>
                   </View>
                </View>
                <View style = {{flex:1,flexDirection: 'column',justifyContent:'flex-end'}}>
                   <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                       <Button onPress={this.showPicker.bind(this, 'start', {date: this.state.startTime.toDate()})}
                               containerStyle={{padding:10,  overflow:'hidden'}}
                               style={{fontSize: 20, color: 'white'}}>
                               <Image style = {{width: 16,height: 12}}
                                      source = {require('./images/play-button-yellow.png')}/>
                       </Button>
                       <Text style = {{color:'rgba(0,0,0,0.46)',fontSize: 14,marginTop:5}}>
                          {this.state.startTime.format('H:mm')}
                       </Text>
                       <Button onPress={this.showPickerTime.bind(this, 'start', {
                               hour: this.state.startTime.hour(),
                               minute: this.state.startTime.minute(),
                               is24Hour: true,})}
                               containerStyle={{padding:10, overflow:'hidden'}}
                               style={{fontSize: 25, color: 'white'}}>
                               <Image style = {{width: 16,height: 12, flexDirection: 'row'}}
                                      source = {require('./images/play-button-yellow.png')}/>
                       </Button>
                   </View>
                </View>
             </View>
           </View>
           <View  style ={{borderColor: '#eeeeee', borderBottomWidth: 0.5}}>
              <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between'}}>
                 <View style ={{flex: 1,flexDirection: 'column',marginLeft:16}}>
                    <View style ={{flex: 1}}>
                        <Text style = {{color:'rgba(0,0,0,0.87)',fontSize: 16}}>До</Text>
                    </View>
                    <View style ={{flex: 1}}>
                        <Text style = {{color:'rgba(0,0,0,0.46)',fontSize: 14}}> {this.state.endTime.format('dd, D MMM, YYYY')}</Text>
                    </View>
                 </View>
                 <View style = {{flex:1,flexDirection: 'column',justifyContent:'flex-end'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                        <Button onPress={this.showPicker.bind(this, 'end', {date: this.state.endTime.toDate()})}
                                containerStyle={{padding:10,  overflow:'hidden'}}
                                style={{fontSize: 20, color: 'white'}}>
                                <Image style = {{width: 16,height: 12}}
                                       source = {require('./images/play-button-yellow.png')}/>
                        </Button>
                        <Text style = {{color:'rgba(0,0,0,0.46)',fontSize: 14, marginTop:5}}>
                          {this.state.endTime.format('H:mm')}
                        </Text>
                        <Button onPress={this.showPickerTime.bind(this, 'end', {
                                hour: this.state.endTime.hour(),
                                minute: this.state.endTime.minute(),
                                is24Hour: true,})}
                                containerStyle={{padding:10, overflow:'hidden'}}
                                style={{fontSize: 25, color: 'white'}}>
                                <Image style = {{width: 16,height: 12, flexDirection: 'row'}}
                                       source = {require('./images/play-button-yellow.png')}/>
                        </Button>
                    </View>
                 </View>
              </View>
           </View>
           <View style={{height:60,flexDirection:'row',justifyContent: 'space-between',borderColor: '#eeeeee', borderBottomWidth: 0.5}}>
              <View style={{marginTop:10,flex: 1,flexDirection:'column',marginLeft:16}}>
                 <View style={{flex:1}}>
                    <Text style={{color:'rgba(0,0,0,0.87)', fontSize: 16}}>Стоимость</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                       <View style={{flex:1}}>
                          <TextInput style={{flex:1,fontSize:12,textAlign:'right'}}
                              keyboardType='numeric'
                              placeholder={this.state.text}
                              onChangeText={(text) => this.setState({text})}>
                          </TextInput>
                       </View>
                       <View style={{flex:1}}>
                          <Text style={{color:'rgba(0,0,0,0.46)',fontSize: 12}}>рублей</Text>
                       </View>
                    </View>
                 </View>
              </View>
              <View style={{borderColor: '#eeeeee',borderLeftWidth:0.5,flex: 1,flexDirection:'column'}}>
                 <View style={{marginTop:10,marginLeft:16}}>
                    <View>
                       <Text style={{color:'rgba(0,0,0,0.87)',fontSize: 16}}>Время</Text>
                    </View>
                    <View style={{flex: 1}}>
                       <Text style={{color:'rgba(0,0,0,0.46)',fontSize: 12}}>{this.state.timeOnly}</Text>
                    </View>
                 </View>
              </View>
           </View>
        </View>
      );
    }
});

let DataAndGold = React.createClass({
    render:function() {
      return (
        <View>
          <DataRecord />
        </View>
      );
    }
});
const mapStateToProps = (state) => {
  return {
    startTime:state.record.startTime,
    endTime:state.record.endTime,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addStartTime: (startTime) => {
        dispatch(setStartTime(startTime))
      },
    addEndTime: (endTime) => {
          dispatch(setEndTime(endTime))
        }

  }
}
DataRecord = connect(mapStateToProps, mapDispatchToProps)(DataRecord)
module.exports=DataAndGold;
