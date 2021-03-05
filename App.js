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
        // center, flex-end, flex-start (default), space-between e space-around, stretch
        alignItems: 'stretch',
      }}>
        <View style={{ width: 100, height: 50, backgroundColor: 'green' }}></View>
        <View style={{ height: 50, backgroundColor: 'red' }}></View>
        <View style={{ height: 50, backgroundColor: 'yellow' }}></View>
      </View>
    );
  };
}

export default App;
