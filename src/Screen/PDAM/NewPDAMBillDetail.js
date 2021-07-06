import React, {useState} from 'react';
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
import {CheckBox} from 'react-native-elements';

const NewPDAMBillDetail = () => {
  const [check, setCheck] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView style={styles.containerAll}>
        <View style={styles.containerHead}>
          <View style={styles.headerTitle}>
            <TouchableOpacity>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>PDAM</Text>
          </View>
        </View>
        <View style={styles.box1}>
          <Text style={styles.textJudul}>Bill Details</Text>
          <Text style={styles.garis}>
            {' '}
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - -{' '}
          </Text>
          <View style={styles.containerText1}>
            <Text style={styles.text1}>No Customer</Text>
            <Text style={styles.text2}>00123456789</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text1}>Name</Text>
            <Text style={styles.text2}>Justin Junaedi</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text1}>Period</Text>
            <Text style={styles.text2}>08/2016</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text1}>Stand Meter (M3)</Text>
          </View>
          <View style={styles.containerText3}>
            <Text style={styles.text1}>Last Month</Text>
            <Text style={styles.text2}>24</Text>
          </View>
          <View style={styles.containerText3}>
            <Text style={styles.text1}>This Month</Text>
            <Text style={styles.text2}>38</Text>
          </View>
          <View style={styles.containerText3}>
            <Text style={styles.text1}>Usage</Text>
            <Text style={styles.text2}>14</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text1}>Bill</Text>
            <Text style={styles.text2}>Rp. 52.500,00</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text1}>Admin</Text>
            <Text style={styles.text2}>Rp. 2.500,00</Text>
          </View>
          <View style={styles.containerText2}>
            <Text style={styles.text2}>Total</Text>
            <Text style={styles.text2}>Rp. 55.000,00</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.containerTextBox2}>
            <Text style={styles.text1Box2}>Payment Method</Text>
            <TouchableOpacity>
              <Text style={styles.text2Box2}>change</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text3Box2}>Bank Transfer</Text>
        </View>
        <View style={styles.box3}>
          <CheckBox
            onPress={() => setCheck(!check)}
            title={<Text style={styles.checkBoxText}>Recurring Billing</Text>}
            checked={check}
          />
          <Text style={styles.textAttention}>
            User will be able to make multiple billing
          </Text>
          <Text style={styles.textAttention}>
            subscriptions on selected pay dates
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.paybox}>
            <Text style={styles.textPaybox}>Pay: Rp 55.000</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPDAMBillDetail;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: '#E5E5E5',
    flexGrow: 1,
  },
  containerHead: {
    backgroundColor: '#263765',
    height: moderateScale(90),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  headerTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: moderateScale(35),
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
  box1: {
    width: moderateScale(332),
    height: moderateScale(370),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
    marginTop: moderateScale(30),
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
  text1: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  text2: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
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
  box2: {
    width: moderateScale(332),
    height: moderateScale(100),
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
    alignSelf: 'center',
    marginTop: moderateScale(32),
  },
  containerTextBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(292),
    marginTop: moderateScale(16),
    left: moderateScale(20),
  },
  text1Box2: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
  },
  text2Box2: {
    textDecorationLine: 'underline',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  text3Box2: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    marginTop: moderateScale(15),
    left: moderateScale(20),
  },
  box3: {
    width: moderateScale(332),
    height: moderateScale(100),
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
    alignSelf: 'center',
    marginTop: moderateScale(32),
  },
  checkBoxText: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
    left: moderateScale(8),
    bottom: moderateScale(2),
  },
  textAttention: {
    color: '#828282',
    left: moderateScale(60),
  },
  paybox: {
    width: moderateScale(332),
    height: moderateScale(55),
    borderRadius: moderateScale(12),
    backgroundColor: '#4493AC',
    alignSelf: 'center',
    marginTop: moderateScale(32),
    marginBottom: moderateScale(32),
  },
  textPaybox: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(15),
  },
});
