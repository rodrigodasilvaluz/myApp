import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <View style={{ height: 65, backgroundColor: '#ddd' }}></View>
        <View style={{ flex: 1, backgroundColor: '#fff' }}></View>
        <View style={{ height: 65, backgroundColor: '#ddd' }}></View>
      </View>
    );
  };
}

export default App;
