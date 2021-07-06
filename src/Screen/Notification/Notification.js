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
import {
  ArrowBack,
  Subtract,
  NotifikasiSucces,
  NotifikasiFailed,
} from '../../Assets/Assets';

const Notification = props => {
  return (
    <SafeAreaView
      style={{width: wp(100), height: hp(100), backgroundColor: 'white'}}>
      <ScrollView style={styles.containerAll}>
        <View style={styles.backgroundTanggal}>
          <Text style={styles.textTanggal}>12 May 2021</Text>
        </View>
        <View style={styles.containerHead}>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Notification</Text>
          </View>
        </View>
        <View style={styles.notifikasiAll}>
          <FastImage
            style={styles.notifikasiSucces}
            source={NotifikasiSucces}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.paymentSuccess}>
            <Text style={styles.textAtas}>PLN Token - Payment Success</Text>
            <Text style={styles.textBawah}>
              Transaction of Rp. 51.500 for ***7890 (Justin Junaedi) has been
              successfully paid.
            </Text>
          </View>
        </View>
        <View style={styles.garis} />
        <View style={styles.notifikasiAll}>
          <FastImage
            style={styles.notifikasiSucces}
            source={NotifikasiSucces}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.paymentSuccess2}>
            <Text style={styles.textAtas}>PLN Token - Payment Success</Text>
            <Text style={styles.textBawah}>
              Subscription for 082123456789 has been successfully created.
            </Text>
          </View>
        </View>
        <View style={styles.garis} />
        <View style={styles.notifikasiAll}>
          <FastImage
            style={styles.notifikasiFailed}
            source={NotifikasiFailed}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.paymentFailed}>
            <Text style={styles.textAtas}>PLN Token - Payment Failed</Text>
            <Text style={styles.textBawah}>
              We couldn't procees your transaction Rp 51.500 for ***7890 (Justin
              Junaedi). Please try again.
            </Text>
          </View>
        </View>
        <View style={styles.garis} />
        <View style={styles.notifikasiAll}>
          <FastImage
            style={styles.notifikasiOngoing}
            source={Subtract}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.paymentOngoing}>
            <Text style={styles.textAtas}>Your subscription due in 2 days</Text>
            <Text style={styles.textBawah}>
              Montly subscribtion (Rp. 103.500) due in 28 June 2021. Please pay
              before due date to avoid late fee.
            </Text>
          </View>
        </View>
        <View style={styles.garis} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

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
    bottom: moderateScale(50),
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
  backgroundTanggal: {
    backgroundColor: '#7284B1',
    height: moderateScale(50),
    top: moderateScale(70),
  },
  textTanggal: {
    top: moderateScale(28),
    left: moderateScale(12),
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
  notifikasiAll: {
    flexDirection: 'row',
  },
  notifikasiSucces: {
    width: moderateScale(28),
    height: moderateScale(28),
    left: moderateScale(18),
    alignSelf: 'center',
  },
  notifikasiFailed: {
    width: moderateScale(28),
    height: moderateScale(28),
    left: moderateScale(18),
    alignSelf: 'center',
  },
  notifikasiOngoing: {
    width: moderateScale(28),
    height: moderateScale(28),
    left: moderateScale(18),
    alignSelf: 'center',
  },
  paymentSuccess: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
  paymentSuccess2: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
  textAtas: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  textBawah: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  garis: {
    borderBottomColor: '#C3CADE',
    borderBottomWidth: moderateScale(1),
    width: moderateScale(342),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  paymentFailed: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
  paymentOngoing: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
});
