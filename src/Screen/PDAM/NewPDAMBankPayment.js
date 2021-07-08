import React from 'react';
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
import {IconPDAMActive, IconCloseWhite} from '../../Assets/Assets';

const NewPDAMBankPayment = () => {
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
          <TouchableOpacity>
            <FastImage
              style={styles.iconClose}
              source={IconCloseWhite}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerLocation}>
          <View style={styles.containerIconPDAM}>
            <FastImage
              style={styles.iconPDAM}
              source={IconPDAMActive}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={styles.textLocation}>DKI Jakarta - AERTA</Text>
        </View>
        <View style={styles.box1}>
          <View style={styles.text1box1}>
            <Text style={styles.text1}>Please complete your payment in</Text>
            <Text style={styles.text2}>59min 59s</Text>
          </View>
          <View style={styles.text3box1}>
            <Text style={styles.textKiri}>Total</Text>
            <Text style={styles.textKanan}>Rp 51.500,00</Text>
          </View>
          <View style={styles.textAllbox1}>
            <Text style={styles.textKiri}>Bank</Text>
            <Text style={styles.textKanan}>Bank Central Asia</Text>
          </View>
          <View style={styles.textAllbox1}>
            <Text style={styles.textKiri}>Account Name</Text>
            <Text style={styles.textKanan}>PT. Biller Indonesia</Text>
          </View>
          <View style={styles.textAllbox1}>
            <Text style={styles.textKiri}>Account No</Text>
            <Text style={styles.textKanan}>0123456789</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.containerUpload}>
              <Text style={styles.textUpload}>Upload Receipt</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text style={styles.textJudul}>Bill Details</Text>
          <Text style={styles.garis}>
            {' '}
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - -{' '}
          </Text>
          <View style={styles.containerText1}>
            <Text style={styles.textKiri}>No Customer</Text>
            <Text style={styles.textKanan}>00123456789</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.textKiri}>Name</Text>
            <Text style={styles.textKanan}>Justin Junaedi</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.textKiri}>Period</Text>
            <Text style={styles.textKanan}>08/2016</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.textKiri}>Stand Meter (M3)</Text>
          </View>
          <View style={styles.containerText3}>
            <Text style={styles.textKiri}>Last Month</Text>
            <Text style={styles.textKanan}>24</Text>
          </View>
          <View style={styles.containerText3}>
            <Text style={styles.textKiri}>This Month</Text>
            <Text style={styles.textKanan}>38</Text>
          </View>
          <View style={styles.containerText3}>
            <Text style={styles.textKiri}>Usage</Text>
            <Text style={styles.textKanan}>14</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.textKiri}>Bill</Text>
            <Text style={styles.textKanan}>Rp. 52.500,00</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text1}>Admin</Text>
            <Text style={styles.textKanan}>Rp. 2.500,00</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.textKanan}>Total</Text>
            <Text style={styles.textKanan}>Rp. 55.000,00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPDAMBankPayment;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    top: moderateScale(10),
    height: moderateScale(50),
    width: moderateScale(340),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(20),
    left: moderateScale(10),
  },
  iconClose: {
    width: moderateScale(14),
    height: moderateScale(14),
    alignSelf: 'center',
    top: moderateScale(23),
  },
  headerLocation: {
    flexDirection: 'row',
    paddingTop: moderateScale(20),
    left: moderateScale(30),
  },
  textLocation: {
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Regular',
    marginLeft: moderateScale(16),
    color: 'white',
    alignSelf: 'center',
  },
  containerIconPDAM: {
    width: moderateScale(27),
    height: moderateScale(27),
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
  },
  iconPDAM: {
    width: moderateScale(15),
    height: moderateScale(17),
    alignSelf: 'center',
    top: moderateScale(5),
  },
  box1: {
    width: moderateScale(332),
    height: moderateScale(275),
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
    alignSelf: 'center',
    marginTop: moderateScale(30),
  },
  text1box1: {
    paddingTop: moderateScale(24),
  },
  text1: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'center',
  },
  text2: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  text3box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(291),
    left: moderateScale(14),
    paddingTop: moderateScale(24),
  },
  textKiri: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  textKanan: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  textAllbox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(291),
    left: moderateScale(14),
    paddingTop: moderateScale(10),
  },
  containerUpload: {
    width: moderateScale(285),
    height: moderateScale(51),
    borderStyle: 'dashed',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(2),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    borderColor: '#BDBDBD',
  },
  textUpload: {
    alignSelf: 'center',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    top: moderateScale(15),
  },
  box2: {
    width: moderateScale(332),
    height: moderateScale(380),
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
    alignSelf: 'center',
    marginTop: moderateScale(30),
    marginBottom: moderateScale(50),
  },
  textJudul: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
    paddingTop: moderateScale(24),
    paddingLeft: moderateScale(17),
  },
  garis: {
    alignSelf: 'center',
    color: 'black',
    paddingTop: moderateScale(12),
  },
  containerText1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(298),
    paddingTop: moderateScale(24),
    left: moderateScale(17),
  },
  containerText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(298),
    paddingTop: moderateScale(9),
    left: moderateScale(17),
  },
  containerText3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(281),
    paddingTop: moderateScale(9),
    left: moderateScale(34),
  },
});
