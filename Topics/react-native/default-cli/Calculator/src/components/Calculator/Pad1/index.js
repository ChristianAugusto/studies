import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import { setNumber, setDecimal, result } from '@Store/ducks/calculator/actions';
import styles from './styles';

function Pad1() {
  const dispatch = useDispatch();

  function onPressPadNumber(number) {
    dispatch(setNumber(number));
  }

  function onPressDecimal() {
    dispatch(setDecimal());
  }

  function onPressResult() {
    dispatch(result());
  }

  return (
    <View style={styles.container}>
      <View style={styles.pad1RowContainer}>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 7)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 8)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 9)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pad1RowContainer}>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 4)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 5)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 6)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pad1RowContainer}>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 1)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 2)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 3)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pad1RowContainer}>
        <TouchableOpacity
          onPress={onPressPadNumber.bind(null, 0)}
          style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDecimal} style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressResult} style={styles.pad1Btn}>
          <Text style={styles.pad1BtnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Pad1;
