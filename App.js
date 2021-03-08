import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, name: 'Rodrigo', age: '45', email: 'rodrigo@rodrigo.com' },
        { id: 2, name: 'Waleska', age: '42', email: 'waleska@waleska.com' },
        { id: 3, name: 'Isabel', age: '2', email: 'isabel@isabel.com' },
        { id: 4, name: 'Augusto', age: '18', email: 'augusto@augusto.com' },
        { id: 5, name: 'João', age: '10', email: 'joao@joao.com' },
      ],
    };
  }

  render() {
    return (
      <View style={ styles.container }>

        <FlatList
          data={ this.state.feed }
          keyExtractor={ (item) => item.id }
          renderItem={ ({item}) => <Pessoa data={ item } /> }
        />

      </View>
    );
  };
}

class Pessoa extends Component {
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
  container: {
    flex: 1,
  },
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

export default App;
