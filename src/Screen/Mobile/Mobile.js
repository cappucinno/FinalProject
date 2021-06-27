import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CoverPayment from '../../Component/CoverPayment/CoverPayment';
import {IconElectricityActive, IconMoibileActive} from '../../Assets/Assets';
const Mobile = props => {
  const dataentry = [
    {
      NameData: 'Pulsa (pre-paid)',
      Naigation: 'ListPaymentElectricity',
    },
    {
      NameData: 'Internet (pre-paid)',
      Naigation: 'ListPaymentElectricity',
    },
    {
      NameData: 'Pascaa bayar (post-paid)',
      Naigation: 'ListPaymentElectricity',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.Grow}
        style={styles.containerSub}>
        <CoverPayment
          navigation={props.navigation}
          titlecover={'Mobile'}
          iconcover={IconMoibileActive}
          data={dataentry}
        />
      </ScrollView>
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
    backgroundColor: '#263765',
  },
});
