import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import generateRandomNumber from '@Utils/generate-random-number';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: '#000000',
    marginBottom: 15,
  },
  randomNumber: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#000000',
  },
  randomNumberBtn: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#000000',
    backgroundColor: '#62eb34',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  clickHereBtn: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#000000',
    backgroundColor: '#34ebd6',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    marginTop: 15,
  },
};

function RandomNumber() {
  const [randomNumber, handleRandomNumber] = useState();

  function onPressRandomNumber() {
    handleRandomNumber(generateRandomNumber());
  }

  function onPressAlert() {
    alert('Look at that, a alert!!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click here to generate a random number</Text>
      <Text style={styles.randomNumber}>{randomNumber || ''}</Text>
      <Pressable style={styles.randomNumberBtn} onPress={onPressRandomNumber}>
        <Text>Random Number</Text>
      </Pressable>
      <Pressable style={styles.clickHereBtn} onPress={onPressAlert}>
        <Text>Click here</Text>
      </Pressable>
    </View>
  );
}

export default RandomNumber;

/*
  Text = renderiza um texto
  View = container de elementos. Importante que os elementos sejam envoltos por view. Permite aplicar o flexbox.
  Button = renderiza um botão (title = título do botão, onPress callback de click)
  Pressable = renderiza um botão personalizado
*/
