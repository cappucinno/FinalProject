import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ComListPayMobile from '../../../Component/ComListPayMobile/ComListPayMobile';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconMoibileActive} from '../../../Assets/Assets';

const ListPaymentMobile = props => {
  const title = props.route.params;
  console.log(title, '<<<<< ini title');
  const ListHargaMobile = [
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

  const ListProvider = [
    {
      Xl: '0818',
    },
    {
      Telkomsel: '0811',
    },
    {
      Indosat: '0856',
    },
    {
      Tri: '0896',
    },
  ];

  const DataCostomer = '12345';
  const alamat = 'ResultPaymentMobile';

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {title === 'Pulsa' ? (
          <ComListPayMobile
            navigation={props.navigation}
            headtitle={'Mobile'}
            pulsa={true}
            headericon={IconMoibileActive}
            titleicon={title}
            titleinput={'Phone Number'}
            datacostomer={DataCostomer}
            alamat={alamat}
          />
        ) : title === 'Internet' ? (
          <ComListPayMobile
            navigation={props.navigation}
            headtitle={'Mobile'}
            internet={true}
            headericon={IconMoibileActive}
            titleicon={title}
            titleinput={'Phone Number'}
            datacostomer={DataCostomer}
            alamat={alamat}
          />
        ) : title === 'Pasca bayar' ? (
          <ComListPayMobile
            navigation={props.navigation}
            headtitle={'Mobile'}
            pasca={true}
            headericon={IconMoibileActive}
            titleicon={title}
            titleinput={'Phone Number'}
            datacostomer={DataCostomer}
            alamat={alamat}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPaymentMobile;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: 'white',
  },
});
