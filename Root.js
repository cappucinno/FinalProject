import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, Text, View} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import {Home} from './src/Screen/Screen';
import {BottomNav} from './src/Component/Component';

const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mainapp"
          component={mainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mainApp = () => {
  return <BottomNav />;
};

export default Root;

const styles = StyleSheet.create({});
