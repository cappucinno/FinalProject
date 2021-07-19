import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {PDAMOptionAction} from './redux/action';

const NewPDAMOption = props => {
  const dispatch = useDispatch();

  const DataOptionPDAM = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.PDAMReducer.dataOption.data != null &&
      state.PDAMReducer.dataOption.data.length > 0
    ) {
      return state.PDAMReducer.dataOption.data;
    } else {
      return [];
    }
  });

  console.log(DataOptionPDAM, 'ini hasil data option internet tv');

  useEffect(() => {
    dispatch(PDAMOptionAction());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#263765',
        width: wp(100),
        height: hp(100),
      }}>
      <ScrollView
        style={{
          flexGrow: 1,
        }}>
        <View style={styles.topContainer}>
          <Text style={styles.textTitle}>PDAM</Text>
        </View>
        <TextInput
          style={styles.textContainer1}
          placeholder="Search by region"
          placeholderTextColor="#999999"
          onChangeText={text => setFirstName(text)}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>DKI Jakarta - AETRA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>DKI Jakarta - PALYJA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>Kota Bandung</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>Kab Bandung</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>Kota Surabaya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>Kota Semarang</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewPDAMBlank')}>
          <View style={styles.textLokasi}>
            <Text style={styles.textTitle}>Yogyakarta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPDAMOption;

const styles = StyleSheet.create({
  topContainer: {
    top: moderateScale(10),
    height: hp(10),
    width: moderateScale(307),
    alignSelf: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(20),
  },
  textContainer1: {
    width: moderateScale(307),
    height: moderateScale(44),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
    backgroundColor: 'white',
  },
  textLokasi: {
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(30),
    left: moderateScale(34),
  },
});
