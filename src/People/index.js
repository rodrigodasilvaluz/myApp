import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class People extends Component {
  render() {
    return (
      <View style={ styles.areaPeople }>
        <Text style={ styles.textPeople }>{ this.props.data.name }</Text>
        <Text style={ styles.textPeople }>{ this.props.data.age }</Text>
        <Text style={ styles.textPeople }>{ this.props.data.email }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPeople: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textPeople: {
    color: '#fff',
    fontSize: 20
  }
});

export default People;
