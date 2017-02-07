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



let Client = React.createClass({
getInitialState: function() {
	return {
	  id: 0,
      name: "Имя",
      phones: [],
      dataViewVisible: false,
	    text: ''
    };
  },

  func: function() {
    this.setState({
      dataViewVisible: !this.state.dataViewVisible,
    });
  },
  showContacts: function() {
    var that = this;
    SelectContacts.picker(function(contact){
        if(contact.resultCode != 0){
            that.setState({
                id: contact.id,
                name: contact.name,
                phones: contact.phones,
                dataViewVisible: that.state.dataViewVisible,
            })
        }
    });
  },
  render:function() {
    let clientWithPhone = <View></View>;
    if(this.state.dataViewVisible){
        clientWithPhone = this.state.phones.map(function(phone){
            return  (
                        <ClientWithPhone key={phone.id} phone={phone.number}/>
                    );
        });
    }
        return(
          <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between'}}>
             <View style={{width:16,height:60}}></View>
             <View style={{flex:90,borderColor: '#fafafa', borderBottomWidth: 1,borderBottomColor :'rgba(255,196,0,87)'}}>
               <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between',marginLeft:-15}}>
                  <View style={{flex: 1,flexDirection:'column',marginLeft:16}}>
                     <View style={{flex: 1}}>
                        <Text style={{color:'rgba(0,0,0,0.87)',fontSize:16}}>Клиент</Text>
                     </View>
                     <View style={{flex: 1}}>
                        <TextInput style={{flex:1,fontSize:12,fontWeight:'bold',color:'rgba(0,0,0,0.87)'}}
                                   placeholder={this.state.name}
                                   onChangeText={(name) => this.setState({name})}>
                        </TextInput>
                     </View>
                  </View>
                  <View style={{flexDirection:'column',justifyContent:'center',marginRight:5}}>
                     <Button onPress={() => this.showContacts()}
                             containerStyle={{padding:5,overflow:'hidden'}}
                             style={{fontSize: 25,color:'white'}}>
                             <Image style={{width: 16,height: 16}}
                                    source={require('./images/phone-book-yellow.png')}/>
                     </Button>
                  </View>
                  <View style={{flexDirection:'column',justifyContent:'center',marginRight:-4}}>
                     <Button onPress={() => this.func()}
                             containerStyle={{padding:5,overflow:'hidden'}}
                             style={{fontSize: 25,color:'white'}}>
                             <Image style={{width: 16,height: 15}}
                                    source={require('./images/play-button-yellow.png')}/>
                     </Button>
                  </View>
               </View>
               {clientWithPhone}
             </View>
             <View style={{width:16,height:60}}></View>
          </View>
     );
  }
});


let ClientWithPhone = React.createClass({
  getInitialState: function() {
	  return {
      writeViewVisible: false
    };
  },
  writeText: function() {
    this.setState({
        writeViewVisible: !this.state.writeViewVisible,
    });
  },
  render:function(){
  let Rewrite = <Text>{this.props.phone}</Text>
    if (this.state.writeViewVisible) {
      Rewrite = (
        <TextInput style={{flex:1,fontSize:12}}
                   defaultValue={this.props.phone}>
        </TextInput> );
       }
    return (
      <View style={{borderColor: '#eeeeee', borderBottomWidth: 0.5}}>
         <View style={{marginTop:10,height:60,flexDirection:'row',justifyContent: 'space-between'}}>
            <View style={{flex: 1,flexDirection:'column',marginLeft:16}}>
               <View style={{flex: 1}}>
                  <Text style={{color:'#464646', fontWeight: 'bold',fontSize: 16}}>Телефон</Text>
               </View>
               <View style={{flex: 1}}>
                    {Rewrite}
              </View>
            </View>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
                <Button onPress={() => this.writeText()}
                        containerStyle={{padding:5,overflow:'hidden'}}
                        style={{fontSize: 20,color:'white'}}>
                        <Image style={{width: 16,height: 16}}
                               source={require('./images/pencil-yellow.png')}/>
                </Button>
            </View>
         </View>
      </View>
    );
  }
});


module.exports = Client;
