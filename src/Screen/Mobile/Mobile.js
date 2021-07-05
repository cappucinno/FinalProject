import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CoverPayment from '../../Component/CoverPayment/CoverPayment';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
import {IconMobileActive} from '../../Assets/Assets';
const Mobile = props => {
  const dataentry = [
    {
      NameData: 'Pulsa (pre-paid)',
      Naigation: 'ListPaymentMobile',
      Page: 'Pulsa',
    },
    {
      NameData: 'Internet (pre-paid)',
      Naigation: 'ListPaymentMobile',
      Page: 'Internet',
    },
    {
      NameData: 'Pascaa bayar (post-paid)',
      Naigation: 'ListPaymentMobile',
      Page: 'Pasca bayar',
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
            titlecover={'Mobile'}
            iconcover={IconMobileActive}
            data={dataentry}
          />
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
  },
});
