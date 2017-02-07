import Header from './Header';
import ByClient from './ByClient';
import ByServices from './ByServices';
import ByTime from './ByTime';
import WithDataView from './WithDataView';
import DataView from './DataView';

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
  Modal,
  WebView,
  ScrollView,
  Switch,
  }
  from 'react-native';
import Button from 'react-native-button'
import { connect } from 'react-redux'
//import {loadServices} from '../../actions/actionPost';
import {style} from '../../style.js';



var ServiceItem = React.createClass({
  getInitialState: function() {
    return ({
      visibleMark: false,
    });
  },
  markVisible: function() {
    this.setState({
        visibleMark: !this.state.visibleMark});

  },
  render: function() {
    let markView = <Text></Text>;
    if(this.state.visibleMark){
      markView = <Image style = {{ width: 15, height: 15, flexDirection: 'row'}}
      source = {require('./image/verification-mark.png')}/>;
    }
     return (
       <TouchableNativeFeedback onPress={() => this.markVisible()}>
          <View style={styles.itemContainer}>
             <View style={{flexDirection: "column",justifyContent: "center"}}>
               <View style={{width: 200,flexDirection: "column",justifyContent: "center"}}>
                 <Text style={{  marginTop: 8, fontSize: 14, color: "rgba(0, 0, 0, 0.54)",}}
                   textAlignVertical='center'>{this.props.name}</Text>
                 <Text style={{fontSize: 14, color: "rgba(0, 0, 0, 0.54)",marginBottom:8,}}
                     textAlignVertical='center'>{this.props.price} руб, {this.props.estimatedTime} мин </Text>
               </View>
             </View>
             <View style={{flexDirection: "column",justifyContent: "center"}}>
               {markView}
             </View>
          </View>
       </TouchableNativeFeedback>
      );
  }
});

var ServiceList = React.createClass({
  render: function() {
    servicesTemplate = [];
    for (let key in this.props.itemList ) {
      let item = this.props.itemList[key]
      servicesTemplate.push(<ServiceItem
        key={key}
        name={item.name}
        estimatedTime={item.estimatedTime}
        price={item.price} />);
    }
      return (
        <ScrollView>
          {servicesTemplate}
        </ScrollView>
      );
  }
});


var Filter = React.createClass({
   getInitialState: function() {
     return {
            dataViewVisible: false,
            modalViewVisible: false,
              modalVisible: false,
                text: '',
                services:this.props.servicesOfDB()
     };
   },
   handleOnChangeTextFind: function(text) {
     this.setState({
         text: text,
         services:this.state.services
     });
   },
   setModalVisible(visible) {
    this.setState({modalVisible: visible,
    services:this.state.services});
   },
   func: function() {
     this.setState({
        dataViewVisible: !this.state.dataViewVisible,
      services:this.state.services});
   },
   funcMod: function() {
        this.setState({
          modalViewVisible: !this.state.modalViewVisible,
        services:this.state.services});
   },
    _pressData: ({}: {[key: number]: boolean}),
    clearText: function() {
        this._textInput.setNativeProps({text:''});
        this.handleOnChangeTextFind('');
      },

   render: function() {
     let dataView = <Text></Text>;
     let withDataView = <Text></Text>;
     let ModalDataView = <Text></Text>;
        if(this.state.dataViewVisible){
            withDataView = <WithDataView/>;
            dataView = <DataView/>;
         }
      var modalBackgroundStyle = {backgroundColor:  'rgba(0, 0, 0, 0.5)',};
      var innerContainerTransparentStyle ={flex:1,backgroundColor: '#fafafa', padding: 20};
      var activeButtonStyle = {backgroundColor: '#ddd'};


      let arr = [];
      let text = this.state.text;
         for(let key in this.state.services) {
             let item = this.state.services[key];
             if(item.name.toLowerCase().indexOf(text.toLowerCase()) != -1) {
                arr.push(item);
             }
         }
        return (
          <View style = {{flex:1, backgroundColor:style.backgroundColor}}>
             <Header navigator={this.props.navigator}/>
             <ByClient />
             <View style={{ flexDirection: 'row'}}>
               <Modal
                  animationType={"slide"}
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}>
                    <View style={{  flex:1, justifyContent: 'center',}}>
                       <View style={[styles.container, modalBackgroundStyle]}>
                          <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <View style = {{ borderColor: '#fafafa', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1,}}>
                              <Text style = {{color:'rgba(0,0,0,0.87)',fontSize: 16, paddingBottom:16}}>Выбор услуг</Text>
                            </View>
                              <View style = {{height:48, flexDirection: "row", borderColor: '#fafafa', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, }}>
                                <View style = {{ flexDirection: "column", justifyContent: "center" }}>
                                  <Image style = {{ width: 18, height: 18,flexDirection: 'row',}}
                                    source = {require('./image/search2.png')}/>
                                </View>
                                  <TextInput
                                    style={styles.findTextField}
                                    ref={component => this._textInput = component}
                                    placeholder="Поиск"
                                    onChangeText={(text) => this.handleOnChangeTextFind(text)}
                                    selectionColor = {'red'}
                                    underlineColorAndroid="#fafafa"
                                    inlineImagePadding={30}/>
                                  <View style = {{ flexDirection: "column", justifyContent: "center"}}>
                                    <Button onPress={this.clearText}
                                    containerStyle={{overflow:'hidden'}}>
                                      <Image style = {{ width: 15, height: 15, flexDirection: 'row',}}
                                    source = {require('./image/closer.png')}/>
                                    </Button>
                                  </View>
                              </View>
                              <ServiceList
                                 itemList={arr}
                                 />
                                <View style = {{marginTop:20, flexDirection: "row", justifyContent: "flex-end"}}>
                                  <Button onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)}}
                                    containerStyle={{overflow:'hidden'}}>
                                    <Text style = {{color:'rgba(0,0,0,0.87)', marginTop:20}}>ОТМЕНА</Text>
                                  </Button>
                                  <Button onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)}}
                                    containerStyle={{overflow:'hidden'}}>
                                    <Text style = {{color:'#ffc400', marginTop:20, marginLeft:16, marginRight:16,}}>OK</Text>
                                    </Button>
                                </View>
                          </View>
                       </View>
                    </View>
               </Modal>
             </View>
             <ByServices onPress={() => {
                        this.setModalVisible(true)}}/>
              <ByTime onPress={() => this.func()}/>
              {withDataView}
              {dataView}
          </View>
        );
   }
});

const mapStateToProps = (state) => {
  return {
    services: state.services,
    servicesOfDB:state.database.getAllService
  }
}
const Filter = connect(mapStateToProps)(Filter)
var styles = StyleSheet.create({
  container: {
    flex: 1,
     borderColor:'#fafafa',
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {

  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    backgroundColor: "#00A69B",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  returnButton: {
    margin: 10,
  },
  returnButtonIcon: {
    width: 20,
    height: 20,
  },
  applyButton: {
    margin: 10,
  },
  applyButtonIcon: {
    width: 20,
    height: 20,
  },
  addServiceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addServiceButton: {
    borderRadius: 50,
    backgroundColor: "#00A69B",
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addServiceButtonIcon: {
    width: 25,
    height: 25,
  },
  addServiceTitle: {
    fontSize: 15,
    color: "#00A69B",
  },
  findTextField: {
    flex: 1,
    marginLeft: 5,
    marginRight: 15,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: '#fafafa',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  itemName: {
    marginBottom:12,
    marginTop: 12,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.54)",
  },
});
export default Filter
