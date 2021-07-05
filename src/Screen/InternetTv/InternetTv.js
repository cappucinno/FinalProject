import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CoverPayment from '../../Component/CoverPayment/CoverPayment';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
import {IconInternetActive} from '../../Assets/Assets';

const InternetTv = props => {
  const dataentry = [
    {
      NameData: 'IndiHome',
      Naigation: 'ListPaymentInternetTv',
      Page: 'IndiHome',
    },
    {
      NameData: 'MNC Play',
      Naigation: 'ListPaymentInternetTv',
      Page: 'MNC Play',
    },
    {
      NameData: 'Biznet Home',
      Naigation: 'ListPaymentInternetTv',
      Page: 'Biznet Home',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundPurple>
        <ScrollView
          contentContainerStyle={styles.Grow}
          style={styles.containerSub}>
          <CoverPayment
            navigation={props.navigation}
            titlecover={'Internet & Tv'}
            iconcover={IconInternetActive}
            data={dataentry}
          />
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default InternetTv;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
  },
});
