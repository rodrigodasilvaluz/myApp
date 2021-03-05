import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      input: '',
    };

    this.actionEnter = this.actionEnter.bind(this);
  }

  actionEnter() {
    if (this.state.input === '') {
      alert('Typing your name!');
      return;
    }
    this.setState({ name: this.state.input, });
  }

  render() {
    return (
      <View style={ styles.container }>
        
        <TextInput
          style={ styles.input }
          placeholder="Typing your name!"
          underlineColorAndroid="transparent"
          onChangeText={ (text) => this.setState({ input: text }) }
        />

        <Button title="Enter" onPress={ this.actionEnter } />

        <Text style={ styles.text }>Wellcome { this.state.name }</Text>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  }
});

export default App;
