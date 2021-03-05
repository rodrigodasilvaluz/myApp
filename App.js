import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Rodrigo Luz'
    };

    this.actionEnter = this.actionEnter.bind(this);
    this.actionEnterFixed = this.actionEnterFixed.bind(this);
  }

  actionEnter() {
    this.setState({
      name: 'Other Name'
    });
  }

  actionEnterFixed(name) {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>

        <Button title="Function name" onPress={ this.actionEnter } />
        <Button title="Fixed name" onPress={ () => this.actionEnterFixed('Fixed Name') } />

        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>
          { this.state.name }
        </Text>
      </View>
    );
  };
}

export default App;
