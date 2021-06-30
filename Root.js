import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, Text, View} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import {
  Home,
  SignUp,
  FilterSubscription,
  Subscription,
  RecurringBilling,
  Electricity,
  ListPaymentElectricity,
  Mobile,
  Login,
  NewSubscription,
  NSBillsCategory,
  NSMobile,
  NSPulsa,
  NSBillDetail,
  NSRecurringBilling,
  NSSubscription,
} from './src/Screen/Screen';

import {BottomNav} from './src/Component/Component';

const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NSSubscription">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mainapp"
          component={mainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Subscription"
          component={Subscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterSubscription"
          component={FilterSubscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecurringBilling"
          component={RecurringBilling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Electricity"
          component={Electricity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListPaymentElectricity"
          component={ListPaymentElectricity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mobile"
          component={Mobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewSubscription"
          component={NewSubscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NSBillsCategory"
          component={NSBillsCategory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NSMobile"
          component={NSMobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NSPulsa"
          component={NSPulsa}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NSBillDetail"
          component={NSBillDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NSRecurringBilling"
          component={NSRecurringBilling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NSSubscription"
          component={NSSubscription}
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
