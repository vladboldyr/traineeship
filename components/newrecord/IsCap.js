import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  Text,
  Image,
  View
  }
  from 'react-native';
import {connect} from 'react-redux';
import {addRecord} from '../../actions/recordsPost';


let IsCap = React.createClass({
    onClickOnRecord: function(){
      this.props.addRecordInDB(this.props.record);
      this.props.navigator.pop();
    },
    render:function() {
      return(
        <View style={{flexDirection: 'column'}}>
           <View style={{flexDirection:'row',height: 60,alignItems:'center',backgroundColor:'rgb(3,155,229)',justifyContent: 'space-between'}}>
              <View style={{flexDirection:'row'}}>
                 <View style={{flexDirection:'column',justifyContent: 'center'}}>
                    <Button onPress={() => {this.props.navigator.pop();}}
                            containerStyle={{overflow:'hidden'}}
                            style={{fontSize: 20,color:'white'}}>
                              <Image style={{width:16,height:16,marginLeft:16}}
                                     source={require('./images/left-arrow.png')}/>
                    </Button>
                 </View>
                 <View style = {{flexDirection: 'column',justifyContent: 'center',marginLeft:30}}>
                    <Text  style={{color:'rgba(255,255,255,0.87)',fontSize:20,marginLeft:15}}>Новая запись</Text>
                 </View>
              </View>
              <View style={{flexDirection:'column',justifyContent: 'center'}}>
                 <Button onPress={() => {this.onClickOnRecord()}}
                         containerStyle={{padding:5,overflow:'hidden'}}
                         style={{fontSize: 10,color:'white'}}>
                           <Image style={{width:12,height: 12,marginRight:16}}
                                  source={require('./images/Mark.png')}/>
                 </Button>
              </View>
           </View>
        </View>
      );
    }
});
const mapStateToProps = (state) => {
  return {
    record:  state.record,
    addRecordInDB: state.database.addRecord,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
IsCap = connect(mapStateToProps, mapDispatchToProps)(IsCap)
module.exports = IsCap;
