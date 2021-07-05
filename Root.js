import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, Text, View} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import {
  SignUp,
  Login,
  FilterSubscription,
  Subscription,
  RecurringBilling,
  Electricity,
  ListPaymentElectricity,
  DetailPaymentElectricity,
  PaymentMethodElectricity,
  AddPaymentCardElectric,
  ResultPaymentElectricity,
  ResultPaymentElectToken,
  Mobile,
  ListPaymentMobile,
  ResultPaymentMobile,
  Landline,
  LandlineResult,
  InternetTv,
  ListPaymentInternetTv,
  ResultPaymentInternetTv,
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
      <Stack.Navigator initialRouteName="Login">
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
          name="DetailPaymentElectricity"
          component={DetailPaymentElectricity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethodElectricity"
          component={PaymentMethodElectricity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPaymentCardElectric"
          component={AddPaymentCardElectric}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentElectricity"
          component={ResultPaymentElectricity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentElectToken"
          component={ResultPaymentElectToken}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mobile"
          component={Mobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListPaymentMobile"
          component={ListPaymentMobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentMobile"
          component={ResultPaymentMobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Landline"
          component={Landline}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LandlineResult"
          component={LandlineResult}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InternetTv"
          component={InternetTv}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListPaymentInternetTv"
          component={ListPaymentInternetTv}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentInternetTv"
          component={ResultPaymentInternetTv}
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
