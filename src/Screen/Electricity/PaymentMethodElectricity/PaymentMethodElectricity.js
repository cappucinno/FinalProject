import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CheckBox} from 'react-native-elements';
import {ArrowBack, CheckActive, CheckBox1} from '../../../Assets/Assets';

const PaymentMethodElectricity = props => {
  const [isselected, SetIsSelected] = useState('');

  const Method = ['Transfer Bank', 'Debit/Credit Card'];

  const PaymentMethod = [
    {
      TransferBank: ['BCA', 'BRI', 'BNI', 'Mandiri'],
    },
    {
      CreditCard: ['VISA', 'MasterCard'],
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <View style={styles.ContainerHeader}>
          <View style={styles.HeaderPayment}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Payment Method</Text>
          </View>
        </View>
        <View style={styles.ContainerIsiPayment}>
          {Method.map((v, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.ContainerBank,
                  {
                    borderColor: isselected === i ? '#3E89AE' : 'white',
                    height:
                      isselected === i
                        ? heightPercentageToDP(24)
                        : heightPercentageToDP(6),
                  },
                ]}>
                <TouchableOpacity onPress={() => SetIsSelected(i)}>
                  <Text style={styles.TextBank}>{Method[i]}</Text>
                </TouchableOpacity>
                {isselected === i ? (
                  <View style={styles.ContainerRadio}>
                    <FastImage
                      style={styles.ArrowBack}
                      source={ArrowBack}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <FastImage
                      style={styles.ArrowBack}
                      source={ArrowBack}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={styles.TextButtonConfirm}>Confirm</Text>
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethodElectricity;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: 'white',
  },
  ContainerHeader: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(9),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  HeaderPayment: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(24),
    marginLeft: moderateScale(34),
    marginRight: moderateScale(36),
  },
  ArrowBack: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
  },
  Judul: {
    marginLeft: moderateScale(16),
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  ContainerIsiPayment: {
    marginTop: moderateScale(14),
    marginLeft: moderateScale(28),
  },
  ContainerBank: {
    marginTop: moderateScale(14),
    width: widthPercentageToDP(85),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
    borderWidth: moderateScale(2),
  },
  TextBank: {
    color: '#333333',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(12),
    marginLeft: moderateScale(18),
  },
  ContainerRadio: {
    marginTop: moderateScale(0),
    margin: moderateScale(24),
    height: moderateScale(24),
    width: moderateScale(50),
    backgroundColor: 'white',
    borderColor: '#999999',
    borderWidth: moderateScale(1),
  },
});
