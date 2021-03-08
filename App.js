import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      btnText: 'Abra o biscoito',
      textPhrase: '',
      img: require('./src/biscuitClose.png')
    };

    this.phrase = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];

    this.crackerBiscuit = this.crackerBiscuit.bind(this);
  }

  crackerBiscuit() {
    const numRandom = Math.floor(Math.random() * this.phrase.length );
    this.setState({
      textPhrase: ' "' + this.phrase[numRandom] + '" ',
      img: require('./src/biscuitOpen.png')
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image
          source={ this.state.img }
          style={ styles.img }
        />

        <Text style={ styles.textPhrase }>{ this.state.textPhrase }</Text>

        <TouchableOpacity style={ styles.btn } onPress={ this.crackerBiscuit }>
          <View style={ styles.btnArea }>
            <Text style={ styles.btnText }>{ this.state.btnText }</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textPhrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#dd7b22'
  }
});

export default App;
