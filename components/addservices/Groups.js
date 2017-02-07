import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Switch,
  ScrollView,
  }
  from "react-native";
import Button from "react-native-button";


var ServiceItem = React.createClass({
  getInitialState: function() {
    return ({
      enable: false,
    });
  },
  render: function() {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemName}>{this.props.name}</Text>
        </View>
        <Switch
          onValueChange={(value) => this.setState({enable: value})}
          value={this.state.enable} />
      </View>
    );
  }
});

var ServiceList = React.createClass({
  render: function() {
    servicesTemplate = this.props.itemList.map(function(item, index) {
      return (
        <ServiceItem
          key={index}
          name={item.name}/>
      );
    });
    return (
      <ScrollView>
        {servicesTemplate}
      </ScrollView>
    );
  }
});

var Groups = React.createClass({
  getDefaultProps: function() {
    return {
      services: [
        {
          name: "Маникюр",
        },
        {
          name: "Работы с волосами",
        },
        {
          name: "педикюр",
        },
      ],
    };
  },

  getInitialState: function() {
    return {
      searchResults: this.props.services,
    };
  },
  handleReturnButtonPress: function() {
    this.props.navigator.pop();
  },
  handleApplyButtonPress: function() {
    alert("ApplyButton Pressed");
  },
  handleAddServiceButtonPress: function() {
    alert("ApplyButton Pressed");
  },
  handleOnChangeTextFind: function(text) {
    this.setState({
        searchResults: this.props.services.filter(function(service) {
          return service.name.indexOf(text) != -1;
        }),
    });
  },
  render: function() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.findTextField}
          placeholder="Поиск"
          onChangeText={(text) => this.handleOnChangeTextFind(text)} />
        <ServiceList
          itemList={this.state.searchResults} />
      </View>
    );
  },
});
var styles = StyleSheet.create({
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
    marginLeft: 15,
    marginRight: 15,
  },
  itemContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderColor: '#eeeeee',
  },
  itemName: {
    color: "#004d40",
    fontSize: 15,
  },
});
module.exports = Groups;
