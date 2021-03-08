import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import People from './src/People';

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
          renderItem={ ({item}) => <People data={ item } /> }
        />

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
