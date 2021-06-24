import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Store} from './src/Store/Store';
import {Provider} from 'react-redux';
import Root from './Root';
import BackgroundPurple from './src/Component/Background/BackgroundPurple';

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#364F90"
        translucent={false}
      />
      <Root />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
