import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Account = props => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Accountt</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'SET_IS_LOGOUT'});
          props.navigation.navigate('Login');
        }}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
