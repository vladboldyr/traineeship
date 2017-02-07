import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import Button from "react-native-button";
import { connect } from 'react-redux'



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
          <Text>{this.props.estimatedTime} мин.</Text>
          <Text>{this.props.price} руб.</Text>
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

var ServiceSelectPageComp = React.createClass({


  getInitialState: function() {
    return {
      text: "",
      services:this.props.servicesOfDB()
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
        text: text,
    });
  },

  render: function() {
    let arr = [];
    let text = this.state.text;
       for(let key in this.state.services) {
           let item = this.state.services[key];
           if(item.name.toLowerCase().indexOf(text.toLowerCase()) != -1) {
              arr.push(item);
           }
       }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Button
            containerStyle={styles.returnButton}
            onPress={() => this.handleReturnButtonPress()}>
             <Image style={styles.returnButtonIcon} source={require("./icons/return.png")} />
          </Button>
          <Text style={styles.headerTitle}>Выберите услуги</Text>
          <Button
            containerStyle={styles.applyButton}
            onPress={() => this.handleApplyButtonPress()}>
              <Image style={styles.applyButtonIcon} source={require("./icons/apply.png")} />
          </Button>
        </View>

        <View style={styles.addServiceContainer}>
          <Button
            containerStyle={styles.addServiceButton}
            onPress = {() => this.props.navigator.push({page: 'addservices'})}>
            <Image style={styles.addServiceButtonIcon} source={require("./icons/add-service.png")} />
          </Button>
           <Text style={styles.addServiceTitle}>Добавить услугу</Text>
        </View>

        <TextInput
          style={styles.findTextField}
          placeholder="Поиск"
          onChangeText={(text) => this.handleOnChangeTextFind(text)} />

        <ServiceList
          itemList={arr} />
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

const ServiceSelectPage = connect(
  mapStateToProps
  )(ServiceSelectPageComp)

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  headerContainer: {
    backgroundColor: "#039be5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 54,
  },
  headerTitle: {
    color: "rgba(255,255,255,0.87)",
    fontSize: 20,
  },
  returnButton: {
    margin: 16,
  },
  returnButtonIcon: {
    width: 16,
    height: 16,
  },
  applyButton: {
    margin: 16,
  },
  applyButtonIcon: {
    width: 16,
    height: 16,
  },
  addServiceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addServiceButton: {
    borderRadius: 50,
    backgroundColor: "#039be5",
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
    fontSize: 16,
    color: "rgba(0,0,0,0.87)",
  },
  findTextField: {
    marginLeft: 15,
    marginRight: 15,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
  },
  itemName: {
    width:250,
    color: "rgba(0,0,0,0.87)",
    fontSize: 16,
  },
});
export default ServiceSelectPage

/*export default connect(
  state => ({ services: state.services })
)(ServiceSelectPage)
*/
