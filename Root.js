import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, Text, LogBox} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screen
import {
  SignUp,
  Login,
  FilterSubscription,
  RecurringBilling,
  Electricity,
  ListPaymentElectricity,
  DetailPaymentElectricity,
  PaymentMethod,
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
  DetailPaymentInternetTv,
  ResultPaymentCreditInternetTv,
  ResultPaymentBankInternetTv,
  NewSubscription,
  NSBillsCategory,
  NSMobile,
  NSPulsa,
  NSBillDetail,
  NSRecurringBilling,
  NSSubscription,
  Notification,
  Profile,
  HistoryReceipt,
  BPJS,
  DetailPaymentBPJS,
  ResultPaymentBPJS,
  NewPDAMOption,
  NewPDAMBlank,
  NewPDAMBillDetail,
  NewPDAMBankPayment,
  EditProfile,
} from './src/Screen/Screen';
import {useSelector} from 'react-redux';
import {BottomNav} from './src/Component/Component';
import {navigationRef} from './src/Function/Nav';

const Stack = createStackNavigator();

const Root = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['Using Math.random']);
  }, []);

  const isLogged = useSelector(state => state.GlobalReducer.isLogged);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="{isLogged ? 'Mainapp' : 'Login'}">
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
          name="PaymentMethod"
          component={PaymentMethod}
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
          name="DetailPaymentInternetTv"
          component={DetailPaymentInternetTv}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentCreditInternetTv"
          component={ResultPaymentCreditInternetTv}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentBankInternetTv"
          component={ResultPaymentBankInternetTv}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BPJS"
          component={BPJS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPaymentBPJS"
          component={DetailPaymentBPJS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultPaymentBPJS"
          component={ResultPaymentBPJS}
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
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryReceipt"
          component={HistoryReceipt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPDAMOption"
          component={NewPDAMOption}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPDAMBlank"
          component={NewPDAMBlank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPDAMBillDetail"
          component={NewPDAMBillDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPDAMBankPayment"
          component={NewPDAMBankPayment}
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
