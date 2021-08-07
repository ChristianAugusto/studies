import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import store from '@Store';
import Loading from './src/components/Loading';
import Calculator from './src/components/Calculator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('@Fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('@Fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('@Fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('@Fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('@Fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('@Fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('@Fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('@Fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('@Fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('@Fonts/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('@Fonts/Roboto-ThinItalic.ttf'),
  });

  return (
    <Provider store={store}>
      {fontsLoaded ? <Calculator /> : <Loading />}
    </Provider>
  );
}
