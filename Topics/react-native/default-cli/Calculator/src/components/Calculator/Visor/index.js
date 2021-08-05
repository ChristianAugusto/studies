import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

function Visor() {
  const { firstNumber, operator, secondNumber } = useSelector(
    state => state.calculator,
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        editable={false}
        value={`${firstNumber} ${operator} ${secondNumber}`}
      />
    </SafeAreaView>
  );
}

export default Visor;
