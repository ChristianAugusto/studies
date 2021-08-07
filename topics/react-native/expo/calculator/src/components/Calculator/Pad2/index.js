import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { eraseNumber, setOperator } from '@Store/ducks/calculator/actions';
import styles from './styles';

function Pad2() {
  const dispatch = useDispatch();

  function onPressErase() {
    dispatch(eraseNumber());
  }

  function onPressPadOperator(operator) {
    dispatch(setOperator(operator));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressErase} style={styles.pad2Btn}>
        <Text style={styles.pad2BtnText}>
          <Image
            style={styles.backspaceIcon}
            source={require('@Images/calculator/backspace-icon.png')}
          />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressPadOperator.bind(null, '/')}
        style={styles.pad2Btn}
      >
        <Text style={styles.pad2BtnText}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressPadOperator.bind(null, '*')}
        style={styles.pad2Btn}
      >
        <Text style={styles.pad2BtnText}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressPadOperator.bind(null, '-')}
        style={styles.pad2Btn}
      >
        <Text style={styles.pad2BtnText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressPadOperator.bind(null, '+')}
        style={styles.pad2Btn}
      >
        <Text style={styles.pad2BtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Pad2;
