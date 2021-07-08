import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ComListPayElec from '../../../Component/ComListPayElec/ComListPayElec';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconElectricityActive} from '../../../Assets/Assets';

const ListPaymentElectricity = props => {
  const DataCostomer = '12345';
  const alamat = 'DetailPaymentElectricity';
  const ListHarga = [
    {
      harga: '20.000',
    },
    {
      harga: '50.000',
    },
    {
      harga: '100.000',
    },
    {
      harga: '200.000',
    },
    {
      harga: '500.000',
    },
    {
      harga: '1000.000',
    },
    {
      harga: '5.000.000',
    },
    {
      harga: '10.000.000',
    },
  ];

  const title = props.route.params;
  console.log(title, '<<<<< ini title');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {title === 'PLN-Token' ? (
          <ComListPayElec
            navigation={props.navigation}
            headtitle={'Electricity'}
            headericon={IconElectricityActive}
            titleicon={title}
            titleinput={'Nomor meter'}
            datacostomer={DataCostomer}
            dataprice={ListHarga}
            alamat={alamat}
            token={true}
          />
        ) : title === 'PLN-Tagihan Listrik' ? (
          <ComListPayElec
            navigation={props.navigation}
            headtitle={'Electricity'}
            headericon={IconElectricityActive}
            titleicon={title}
            titleinput={'IDEPL'}
            datacostomer={DataCostomer}
            dataprice={ListHarga}
            alamat={alamat}
            tagihan={true}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPaymentElectricity;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: 'white',
  },
});
