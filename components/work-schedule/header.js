import React from 'react'
import {
  StyleSheet,
  PropTypes,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: 'rgb(3,155,229)',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    color: 'white'
  },
  returnButton: {
    width: 15,
    height: 15,
    marginLeft: 15
  },
  editButton: {
    width: 15,
    height: 15,
    marginRight: 15
  }
})

const Header = React.createClass({
  propTypes: {
    onReturnPress: React.PropTypes.func,
    onEditPress: React.PropTypes.func
  },

  render: function() {
    return (
      <View style = {styles.container}>
        <TouchableHighlight onPress = {this.props.onReturnPress}>
          <Image source={require('../../icons/return.png')} style={styles.returnButton}/>
        </TouchableHighlight>
        <Text style = {styles.title}>
          {this.props.title}
        </Text>
        <TouchableHighlight onPress = {this.props.onEditPress}>
          <Image source={require('../../icons/edit.png')} style={styles.editButton}/>
        </TouchableHighlight>
      </View>
    )
  }
})

export default Header
