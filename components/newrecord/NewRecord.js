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
  getDefaultProps: function() {
    return({
      viewMark:false
    });
  },
  getInitialState: function() {
    return ({
      viewMark: this.props.visibleMark
    });
  },
  markVisible: function() {
    if(!this.state.viewMark){
      this.props.addServicesID(this.props.servicesID,this.props.name);
    }
    if(this.state.viewMark){
      this.props.removeServicesID(this.props.servicesID,this.props.name);
    }

    this.setState({
      viewMark: !this.state.viewMark
    });
  },
  render: function() {

    let markView = <Text></Text>;
    if(this.state.viewMark){
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
  },
  removeServicesID: function(id,name) {
     this.props.servicesId.splice(this.props.servicesId.indexOf(id),1);
     this.props.massivNameSelectedServices.splice(this.props.massivNameSelectedServices.indexOf(name),1);
  },
  render: function() {

    servicesTemplate = [];
    for (let key in this.props.itemList ) {
      let item = this.props.itemList[key];
      servicesTemplate.push(<ServiceItem
        key={key}
        name={item.name}
        estimatedTime={item.estimatedTime}
        price={item.price}
        servicesID={item.servicesID}
        addServicesID={(id,name) => this.addServicesID(id,name)}
        removeServicesID={(id,name) => this.removeServicesID(id,name)}
        visibleMark={this.props.servicesId.indexOf(item.servicesID) != -1 }
        />);
      }
    return (
      <ScrollView>
        {servicesTemplate}
      </ScrollView>
    );
  }
});

let StateModalVisible = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      servicesId:[...this.props.servicesId],
      massivNameSelectedServices:[...this.props.massivNameSelectedServices],
      services:this.props.servicesOfDB()
    };
  },
  handleOnChangeTextFind: function(text) {
    this.setState({
         text: text,
         servicesId:this.state.servicesId,
         services:this.state.services
    });
  },
  setModalVisible() {
    this.props.closeModal();
    this.setState({
      text: "",
      servicesId:this.state.servicesId,
      massivNameSelectedServices:this.state.massivNameSelectedServices,
      services:this.state.services
    });
  },
  clearText: function() {
      this._textInput.setNativeProps({text: ''});
      this.handleOnChangeTextFind('');
  },
  OK: function() {
    this.props.addMassivServicesId(this.state.servicesId);
    this.props.saveMassivNameSelectedServices(this.state.massivNameSelectedServices)
    this.props.closeModal();
  },
  render: function() {
    var modalBackgroundStyle = {backgroundColor: 'rgba(0, 0, 0, 0.5)'};
    var innerContainerTransparentStyle ={flex:1,backgroundColor: '#fafafa', padding: 20};

    let arr = [];
    let text = this.state.text;
       for(let key in this.state.services) {
           let item = this.state.services[key];
           if(item.name.toLowerCase().indexOf(text.toLowerCase()) != -1) {
              arr.push(item);
           }
       }
    return(
        <Modal
           animationType={"slide"}
           transparent={true}
           visible={this.state.modalView}
           onRequestClose={() => {this.setModalVisible()}}>
             <View style={{  flex:1, justifyContent: 'center'}}>
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
                          itemList={arr}
                          servicesId={this.state.servicesId}
                          massivNameSelectedServices={this.state.massivNameSelectedServices}
                          />
                         <View style = {{marginTop:20, flexDirection: "row", justifyContent: "flex-end"}}>
                           <Button onPress={() => {
                             this.setModalVisible()}}
                             containerStyle={{overflow:'hidden'}}>
                             <Text style = {{color:'rgba(0,0,0,0.87)', marginTop:20}}>ОТМЕНА</Text>
                           </Button>
                           <Button onPress={() => {
                             this.OK()}}
                             containerStyle={{overflow:'hidden'}}>
                             <Text style = {{color:'#ffc400', marginTop:20, marginLeft:16, marginRight:16,}}>OK</Text>
                             </Button>
                         </View>
                   </View>
                </View>
             </View>
        </Modal>
    );
  }
});
var NewRecord = React.createClass({
  getInitialState: function() {
    return {
      modalVisible:false,
      massivNameSelectedServices:[]
    };
  },
 componentDidMount: function(){
     this.props.addMassivServicesId([]);
  },
  setmassivNameSelectedServices() {
    this.setState({
      modalVisible:this.state.modalVisible,
      massivNameSelectedServices:this.state.massivNameSelectedServices
    });
  },
  saveMassivNameSelectedServices: function(massiv){
    this.setState({
      massivNameSelectedServices: massiv,
      modalVisible:this.state.modalVisible
    });
  },
  setModalVisible(setModalVisible){
    this.setState({
        modalVisible:setModalVisible,
        massivNameSelectedServices:this.state.massivNameSelectedServices
    });
  },
  closeModal(){
    this.setState({
      modalVisible:!this.state.modalVisible,
    });
  },
  render:function() {

    var activeButtonStyle = {backgroundColor: '#ddd'};

    let setViewModal = <View></View>;
    if(this.state.modalVisible) {
      setViewModal =  <StateModalVisible
           massivNameSelectedServices = {this.state.massivNameSelectedServices}
           servicesId = {this.props.servicesId}
           services={this.props.services}
           servicesOfDB = {this.props.servicesOfDB}
           closeModal= {() => this.closeModal()}
           addMassivServicesId = {(servicesId) => this.props.addMassivServicesId(servicesId)}
           saveMassivNameSelectedServices = {(massiv) => this.saveMassivNameSelectedServices(massiv)}
           />
    }

    return (
      <View style={{flex: 1, backgroundColor: "#fafafa"}}>
         <IsCap navigator={this.props.navigator}/>
            <ScrollView >
		          <Client/>
                <View style={{ flexDirection: 'row'}}>
                  {setViewModal}
                </View>
                  <Servies onPress={() => {
                    this.setModalVisible(true)}}
                    massivNameSelectedServices = {this.state.massivNameSelectedServices}
                    setmassivNameSelectedServices = {()=> this.setmassivNameSelectedServices()}/>
                  <DataAndGold />
                  <TheNote />
            </ScrollView>
	    </View>

    );
  }
});

const mapStateToProps = (state) => {
  return {
    servicesId:state.record.servicesId,
    servicesOfDB:state.database.getAllService
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  addMassivServicesId: (servicesId) => {
      dispatch(setServicesId(servicesId))
    }
  }
}
const NewRecord = connect(mapStateToProps,mapDispatchToProps)(NewRecord)


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
export default NewRecord;
