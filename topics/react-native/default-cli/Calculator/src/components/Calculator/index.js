import React from 'react';
import { View } from 'react-native';

import Visor from './Visor';
import styles from './styles';
import Pad1 from './Pad1';
import Pad2 from './Pad2';

function Calculator() {
  return (
    <View style={styles.container}>
      <Visor />
      <View style={styles.appActionsContainer}>
        <Pad1 />
        <Pad2 />
      </View>
    </View>
  );
}

export default Calculator;
