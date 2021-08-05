import React from 'react';
import { Provider } from 'react-redux';

import store from '@Store';
import Calculator from './components/Calculator';

export default function App() {
  return <Provider store={store}>{<Calculator />}</Provider>;
}
