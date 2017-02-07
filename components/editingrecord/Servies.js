import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableNativeFeedback
  }
  from 'react-native';
import {connect} from 'react-redux';
import {loadServices} from '../../actions/actionPost';
import {setServicesId} from '../../actions/setServicesId';

class Servies extends Component {
  onClickOnServices(){
    this.props.wouldLoadServices();
    this.props.onPress();

    //this.props.navigator.push({page: 'serviceSelectPage'});
  }
  render(){
    let servicesId = this.props.servicesId;
    let selectedServices = this.props.massivNameSelectedServices.map(function(name,index){
        return  (
                  <SelectedServices key={servicesId[index]} name = {name}/>
                );
        });
     return (
            <View style={{borderColor: '#eeeeee', borderBottomWidth: 0.5}}>
               <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between'}}>
                  <View style={{flex: 1,flexDirection:'column',marginLeft:16}}>
                     <View >
                        <Text style={{color:'rgba(0,0,0,0.87)', fontSize: 16}}>Услуга</Text>
                     </View>
                     <View style={{flex: 1,flexDirection:'row'}}>
                      {selectedServices}
                     </View>
                  </View>
                  <View style={{justifyContent:'center',marginRight:5}}>
                      <Button onPress={() => this.onClickOnServices()}
                              containerStyle={{padding:5,overflow:'hidden'}}
                              style={{fontSize: 20,color:'white'}}>
                              <Image style={{width: 20,height: 20}}
                                     source={require('./images/plus.png')}/>
                      </Button>
                  </View>
               </View>
            </View>
        );
    }
}
let SelectedServices = React.createClass({
  render:function(){
    return(
       <View>
           <Button
                   containerStyle={{padding:5,overflow:'hidden'}}
                   style={{fontSize: 30,color:'white'}}>
                       <View style={{flex:1,flexDirection:'column',borderRadius: 15,backgroundColor:'rgba(0,0,0,0.1)'}}>
                           <View style={{flex:1,flexDirection:'row'}}>
                              <View style={{flex:5,justifyContent:'center'}}>
                                <Text style={{marginTop:5,marginLeft:10,marginRight:5,marginBottom:5}}>{this.props.name}</Text>
                              </View>
                              <View style={{flex:1,justifyContent:'center',marginRight:10}}>
                                <Image style={{width: 18,height: 18}}
                                       source={require('./images/krestik.png')}/>
                              </View>
                           </View>
                       </View>
           </Button>
       </View>
    );
  }
});
const mapStateToProps = (state) => {
  return {
    servicesId:state.record.servicesId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    wouldLoadServices: () => {
      dispatch(loadServices())
    }
  }
}
Servies = connect(mapStateToProps,mapDispatchToProps)(Servies)
export default Servies;
