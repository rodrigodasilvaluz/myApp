import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{
        // 1, 2, 3, 4 ...
        flex: 1,
        // row or column (default)
        flexDirection: 'column',
        // center, flex-end, flex-start (default), space-between e space-around
        justifyContent: 'center',
        // center, flex-end, flex-start (default), space-between e space-around
        alignItems: 'center',
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
      </View>
    );
  };
}

export default App;
