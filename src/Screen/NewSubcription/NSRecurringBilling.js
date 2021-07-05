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
import {ArrowBack} from '../../Assets/Assets';
import {Line, PLN} from '../../Assets/Assets';

const NSRecurringBilling = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerAll}>
        <View style={styles.containerHead}>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>New Subscription</Text>
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.fontText}>Recurring Billing</Text>
          <Text style={styles.fontText2}>
            Create automatic billing for your next puchase.
          </Text>
          <Text style={styles.fontText2}>
            Available in weekly, montly and yearly basis
          </Text>
          <View>
            <Text
              style={{
                alignSelf: 'center',
                color: '#BDBDBD',
                top: moderateScale(38),
              }}>
              {' '}
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - -
            </Text>
          </View>
          <Text style={styles.fontText3}>Period</Text>
          <View style={styles.boxKecil}>
            <View style={styles.textDirection}>
              <Text style={styles.textSelect}>Please select</Text>
              <TouchableOpacity
                style={{
                  top: moderateScale(15),
                  left: moderateScale(160),
                }}>
                <FastImage
                  style={styles.imageLine}
                  source={Line}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.containerBox2}>
          <Text style={styles.fontText}>Bills</Text>
          <Text
            style={{
              alignSelf: 'center',
              color: '#BDBDBD',
              top: moderateScale(25),
            }}>
            {' '}
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - -
          </Text>
          <View style={styles.containerBillAtas}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={PLN}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see detail</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerBillBawah}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={PLN}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>Pulsa - Telkomsel</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see detail</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addnewbill}>
            <TouchableOpacity style={{top: moderateScale(15)}}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: moderateScale(12),
                  fontFamily: 'Montserrat-Regular',
                }}>
                Add New Bill
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: wp(100), height: hp(30)}}>
          <TouchableOpacity style={styles.ContainerButtonSubs}>
            <View style={styles.ButtonSubs}>
              <Text style={styles.TextButtonSubs}>Create</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NSRecurringBilling;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingBottom: moderateScale(150),
  },
  containerHead: {
    backgroundColor: '#263765',
    height: moderateScale(95),
    borderBottomLeftRadius: moderateScale(18),
    borderBottomRightRadius: moderateScale(18),
  },
  HeaderBilling: {
    alignItems: 'center',
    flexDirection: 'row',
    top: moderateScale(38),
    left: moderateScale(33),
  },
  ArrowBack: {
    height: hp(2),
    width: wp(6),
  },
  Judul: {
    marginLeft: moderateScale(16),
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  containerBox: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: moderateScale(332),
    height: moderateScale(227),
    alignSelf: 'center',
    marginBottom: moderateScale(40),
    top: moderateScale(30),
    elevation: 10,
  },
  fontText: {
    fontSize: moderateScale(14),
    left: moderateScale(25),
    top: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
  },
  fontText2: {
    fontSize: moderateScale(10),
    left: moderateScale(25),
    top: moderateScale(26),
    fontFamily: 'Montserrat-Regular',
    color: '#828282',
  },
  fontText3: {
    fontSize: moderateScale(12),
    left: moderateScale(25),
    top: moderateScale(45),
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  containerBillAtas: {
    // backgroundColor: 'green',
    top: moderateScale(35),
  },
  containerBillBawah: {
    // backgroundColor: 'blue',
    top: moderateScale(55),
  },
  containerData1: {
    flexDirection: 'row',
    // top: moderateScale(41),
    width: moderateScale(292),
    alignSelf: 'center',
  },
  containerToken: {
    width: moderateScale(32),
    height: moderateScale(32),
    backgroundColor: '#EBEDF4',
  },
  imageToken: {
    width: moderateScale(18),
    height: moderateScale(11),
    alignSelf: 'center',
    top: moderateScale(9),
  },
  boxText: {
    flexDirection: 'row',
    width: moderateScale(252),
    left: moderateScale(10),
    justifyContent: 'space-between',
  },
  data1: {},
  textPLN: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    color: '#333333',
  },
  textNo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#828282',
  },
  data2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#333333',
  },
  seeDetail: {
    left: moderateScale(62),
  },
  textseeDetail: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(10),
    textDecorationLine: 'underline',
  },
  boxKecil: {
    display: 'flex',
    width: moderateScale(290),
    height: moderateScale(42),
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    top: moderateScale(50),
  },
  textDirection: {
    flexDirection: 'row',
  },
  textSelect: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
    color: '#999999',
    top: moderateScale(9),
    left: moderateScale(15),
  },
  imageLine: {
    height: moderateScale(10),
    width: moderateScale(15),
    // top: moderateScale(15),
    // left: moderateScale(160),
  },
  containerBox2: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: moderateScale(332),
    height: moderateScale(301),
    alignSelf: 'center',
    marginBottom: moderateScale(40),
    top: moderateScale(30),
    elevation: 10,
  },
  addnewbill: {
    width: moderateScale(290),
    height: moderateScale(51),
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(1),
    borderStyle: 'dashed',
    alignSelf: 'center',
    top: moderateScale(95),
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    width: wp(90),
    elevation: moderateScale(3),
    top: moderateScale(30),
  },
  ButtonSubs: {
    color: 'white',
    fontSize: moderateScale(21),
    paddingTop: moderateScale(5),
    fontFamily: 'Montserrat-Bold',
  },
  TextButtonSubs: {
    alignSelf: 'center',
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(5),
  },
});
