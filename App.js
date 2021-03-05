import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Rodrigo Luz'
    };
  }

  render() {
    return (
      <View style={ styles.area }>
        <Text style={ styles.mainText }>Text 1</Text>
        <Text style={ styles.centerText }>Text 2</Text>
        <Text style={[ styles.mainText, styles.centerText ]}>Text 3</Text>
        <Text>Text 4</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40,
  },
  mainText: {
    fontSize: 25,
    color: '#FF0000',
  },
  centerText: {
    textAlign: 'center',
  },
});

export default App;
