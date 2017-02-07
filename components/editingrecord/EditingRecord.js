import Button from 'react-native-button';
import IsCap from './IsCap';
import Client from './Client';
import Servies from './Servies';
import TheNote from './TheNote';
import DataAndGold from './DataAndGold';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  DatePickerAndroid,
  TimePickerAndroid,
  Modal,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ScrollView,
  Navigator,
  }
  from 'react-native';
import { connect } from 'react-redux'
import {setServicesId} from '../../actions/setServicesId';

var ServiceItem = React.createClass({
  getInitialState: function() {
    return ({
      visibleMark: false
    });
  },

  markVisible: function() {
    debugger;
    if(!this.state.visibleMark){
      this.props.addServicesID(this.props.servicesID,this.props.name);
    }
    if(this.state.visibleMark){
      this.props.removeServicesID(this.props.servicesID,this.props.name);
    }
    this.setState({
      visibleMark: !this.state.visibleMark
    });
  },

  render: function() {
    let markView = <Text></Text>;
    if(this.state.visibleMark){
      markView = <Image style = {{ width: 15, height: 15, flexDirection: 'row'}}
      source = {require('./images/verification-mark.png')}/>;
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
  addServicesID: function(id,name) {
      this.props.servicesId.push(id);
      this.props.massivNameSelectedServices.push(name);
      //this.props.addServicesId(this.props.servicesId)
  },
  removeServicesID: function(id,name) {
     this.props.servicesId.splice(id,1);
     this.props.massivNameSelectedServices.splice(name,1);
     //this.props.addServicesId(this.props.servicesId);
  },
  render: function() {
    servicesTemplate = [];
    for (let key in this.props.itemList ) {
      let item = this.props.itemList[key]
      servicesTemplate.push(<ServiceItem
        key={key}
        name={item.name}
        estimatedTime={item.estimatedTime}
        price={item.price}
        servicesID={item.servicesID}
        addServicesID={(id) => this.addServicesID(id)}
        removeServicesID={(id) => this.removeServicesID(id)}
        />);
    }
    return (
      <ScrollView>
        {servicesTemplate}
      </ScrollView>
    );
  }
});

var EditingRecord = React.createClass({
  getInitialState: function() {
    return {
      dataViewVisible: false,
      modalVisible: false,
      text: "",
      massivNameSelectedServices:[]
    };
  },
  componentDidMount: function(){
    this.props.addServicesId([]);
  },
  handleOnChangeTextFind: function(text) {
    alert(massivNameSelectedServices);
    this.setState({
       text: text,
       massivNameSelectedServices:massivNameSelectedServices,
    });
  },
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  _pressData: ({}: {[key: number]: boolean}),
  clearText: function() {
      this._textInput.setNativeProps({text: ''});
      this.handleOnChangeTextFind('');
    },

  render:function() {
    var modalBackgroundStyle = {backgroundColor: 'rgba(0, 0, 0, 0.5)'};
    var innerContainerTransparentStyle ={flex:1,backgroundColor: '#fafafa', padding: 20};
    var activeButtonStyle = {backgroundColor: '#ddd'};

    let arr1 = [];
    let text = this.state.text;
    if(this.props.services.isLoading!=undefined)
      if(!this.props.services.isLoading){
        arr1 = this.props.services.data.filter(function(service) {
          return service.name.toLowerCase().indexOf(text.toLowerCase()) != -1;
        })
      }
    return (
      <View style={{flex: 1, backgroundColor: "#fafafa"}}>
         <IsCap navigator={this.props.navigator}/>
            <ScrollView >
		          <Client/>
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
                                       source = {require('./images/search2.png')}/>
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
                                       source = {require('./images/closer.png')}/>
                                       </Button>
                                     </View>
                                 </View>
                                 <ServiceList
                                    itemList={arr1}
                                    servicesId={this.props.servicesId}
                                    addServicesId={() => this.props.addServicesId()}
                                    massivNameSelectedServices={this.state.massivNameSelectedServices}
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
                  <Servies onPress={() => {
                    this.setModalVisible(true)}}
                    massivNameSelectedServices = {this.state.massivNameSelectedServices}/>
                  <DataAndGold />
                  <TheNote />
            </ScrollView>
	    </View>

    );
  }
});

const mapStateToProps = (state) => {
  return {
    services: state.services,
    servicesId:state.record.servicesId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  addServicesId: (servicesId) => {
      dispatch(setServicesId(servicesId))
    }
  }
}
const EditingRecord = connect(mapStateToProps,mapDispatchToProps)(EditingRecord)

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
    backgroundColor: "#fafafa",
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
    flex:1,
    marginLeft: 15,
    marginRight: 15,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: '#fafafa',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
});
export default EditingRecord;
