import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {

    const configs = {
      name: 'Steve Jobs',
      img: {
        uri: 'https://sujeitoprogramador.com/steve.png',
      },
      style: {
        width: 300,
        height: 300
      }
    };

    return (
      <View>
        <Text>Hello Rodrigo Luz</Text>
        <Text>My first app</Text>
        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>
          System Analyst | Full Stack
        </Text>

        <Jobs configs={ configs } />

      </View>
    );
  };
}

class Jobs extends Component {
  render() {
    return (
      <View>
        <Image
          source={ this.props.configs.img }
          style={ this.props.configs.style }
        />
        <Text style={{ fontSize: 30 }}>{ this.props.configs.name }</Text>
      </View>
    );
  }
}

export default App;
