import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CoverPayment from '../../Component/CoverPayment/CoverPayment';
import {IconElectricityActive} from '../../Assets/Assets';
const Electricity = props => {
  const dataentry = [
    {
      NameData: 'Token-Pulsa',
      Naigation: 'ListPaymentElectricity',
    },
    {
      NameData: 'Token-Listrik',
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
          titlecover={'Electricity'}
          iconcover={IconElectricityActive}
          data={dataentry}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Electricity;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
  },
});
