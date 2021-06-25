import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  IconBiller,
  IconBell,
  IconBPJS,
  IconElectricity,
  IconInternet,
  IconLandLine,
  IconMobile,
  IconPDAM,
  IconSubscribtion,
} from '../../Assets/Assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow}>
        <View style={styles.containerFull}>
          <View style={styles.containerHead}>
            <FastImage
              style={styles.imageBiller}
              source={IconBiller}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.StyleText}>biller</Text>
            <TouchableOpacity>
              <FastImage
                style={styles.imageBell}
                source={IconBell}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerTop}>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconElectricity}
                source={IconElectricity}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconMobile}
                source={IconMobile}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconInternet}
                source={IconInternet}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Internet & TV</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMiddle}>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconLandline}
                source={IconLandLine}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Landline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconBPJS}
                source={IconBPJS}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>BPJS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconPDAM}
                source={IconPDAM}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>PDAM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container1} />
        <Text style={styles.textBottom}>Ongoing Purchase</Text>
        {/* Tubuh Cardnya */}
        <View style={styles.ContainerRes}>
          <View style={styles.status}>
            <Text style={styles.textStatus}> Complete your payment in</Text>
            <Text style={styles.textResStatus}> 59min 59s </Text>
          </View>
          <View style={styles.ContainerFild}>
            {/* LIST PAYMENT */}
            <View style={styles.containerbill}>
              <View style={styles.ContainerIconPayment}>
                <FastImage
                  style={styles.IconPayment}
                  source={IconElectricity}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerListBill}>
                <View>
                  <Text style={styles.TextIcon1}>PLN - Token</Text>
                  <Text style={styles.TextIcon2}>141234567890</Text>
                </View>
                <Text style={styles.TextIcon3}>Rp.50000</Text>
              </View>
            </View>
            <View style={styles.containerbill}>
              <View style={styles.ContainerIconPayment}>
                <FastImage
                  style={styles.IconPayment}
                  source={IconElectricity}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerListBill}>
                <View>
                  <Text style={styles.TextIcon1}>PLN - Token</Text>
                  <Text style={styles.TextIcon2}>141234567890</Text>
                </View>
                <Text style={styles.TextIcon3}>Rp.500</Text>
              </View>
            </View>
            <View style={styles.ContainerTotalCount}>
              <View style={styles.TotalCount}>
                <Text style={styles.TextTotal}>Total</Text>
                <Text style={styles.TextTotalCount}>Rp.100000</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.ContainerButton}>
              <View style={styles.ButtonPay}>
                <Text style={styles.TextButton}>Confirm Payment</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
    paddingBottom: moderateScale(100),
  },
  container: {
    backgroundColor: 'white',
    height: hp(100),
    width: wp(100),
  },
  containerFull: {
    backgroundColor: '#263765',
  },
  containerHead: {
    flexDirection: 'row',
    padding: wp(5),
  },
  imageBiller: {
    height: hp(5),
    width: wp(5),
  },
  imageBell: {
    height: hp(5),
    width: wp(5),
    marginLeft: moderateScale(260),
  },
  StyleText: {
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
    alignSelf: 'center',
  },
  containerTop: {
    flexDirection: 'row',
  },
  imageIconElectricity: {
    height: moderateScale(44),
    width: moderateScale(32),
    top: moderateScale(12),
  },
  imageIconMobile: {
    height: moderateScale(44),
    width: moderateScale(31),
    top: moderateScale(12),
  },
  imageIconInternet: {
    height: moderateScale(44),
    width: moderateScale(40),
    top: moderateScale(12),
  },
  imageIconLandline: {
    height: moderateScale(44),
    width: moderateScale(40),
    top: moderateScale(12),
  },
  imageIconBPJS: {
    height: moderateScale(44),
    width: moderateScale(44),
    top: moderateScale(12),
  },
  imageIconPDAM: {
    height: moderateScale(44),
    width: moderateScale(37),
    top: moderateScale(12),
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'white',
    height: hp(12),
    width: wp(26),
    borderRadius: 20,
    marginLeft: wp(5),
    marginRight: wp(1),
    top: hp(3),
  },
  textInButton: {
    top: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  containerMiddle: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  container1: {
    backgroundColor: '#263765',
    height: moderateScale(78),
    width: moderateScale(210),
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
    borderRadius: 2,
    transform: [{scaleX: 2}],
    marginLeft: moderateScale(84),
  },
  textBottom: {
    top: hp(5),
    marginLeft: wp(5),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  imageSubsribtion: {
    height: moderateScale(100),
    width: moderateScale(150),
    alignSelf: 'center',
    top: moderateScale(40),
  },
  textSubsribtion: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    top: moderateScale(42),
  },
  buttonBottom: {
    backgroundColor: 'blue',
    borderWidth: 0.5,
    borderColor: 'white',
    height: moderateScale(42),
    width: moderateScale(308),
    borderRadius: 5,
    top: moderateScale(50),
    alignSelf: 'center',
  },
  buttonTextBottom: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    top: moderateScale(6),
  },
  ContainerRes: {
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: wp(90),
    height: hp(35),
    alignSelf: 'center',
    marginBottom: moderateScale(1),
    top: moderateScale(50),
  },
  status: {
    backgroundColor: '#EB5757',
    borderTopStartRadius: moderateScale(20),
    borderTopEndRadius: moderateScale(20),
    height: hp(5),
    padding: moderateScale(10),
    flexDirection: 'row',
  },
  textStatus: {
    color: 'white',
    fontSize: moderateScale(9),
    fontFamily: 'Montserrat-Regular',
    paddingLeft: moderateScale(10),
  },
  textResStatus: {
    color: 'white',
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Bold',
    paddingLeft: moderateScale(5),
  },
  ContainerFild: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: wp(90),
    height: hp(32),
    alignSelf: 'center',
    paddingLeft: wp(5),
  },
  containerbill: {
    paddingTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: wp(9),
  },
  ContainerIconPayment: {
    display: 'flex',
    borderRadius: moderateScale(5),
    backgroundColor: '#EBEDF4',
    width: wp(9),
    height: hp(5),
  },
  IconPayment: {
    height: hp(5),
    width: wp(3),
    alignSelf: 'center',
  },
  ContainerListBill: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
  },
  //nama List
  TextIcon1: {
    color: '#333333',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginLeft: moderateScale(128),
    paddingRight: moderateScale(20),
    backgroundColor: 'white',
  },
  TextIcon2: {
    color: '#828282',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginLeft: moderateScale(24),
  },
  // Uang
  TextIcon3: {
    color: '#828282',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',

    paddingLeft: moderateScale(2),
  },
  ContainerTotalCount: {
    paddingRight: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  TotalCount: {
    backgroundColor: '#EBEDF4',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(10),
  },
  TextTotal: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  TextTotalCount: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },
  ContainerButton: {
    alignItems: 'center',
    paddingRight: wp(5),
    marginTop: moderateScale(15),
  },
  ButtonPay: {
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    width: wp(80),
    alignItems: 'center',
  },
  TextButton: {
    color: 'white',
    fontSize: moderateScale(21),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(5),
  },
});
