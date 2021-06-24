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
  IconBPJSActive,
  IconElectricityActive,
  IconInternetActive,
  IconLandlineActive,
  IconMobileActive,
  IconPDAMActive,
  NoBill,
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
        <View style={styles.containerSub}>
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
                source={IconElectricityActive}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconMobile}
                source={IconMobileActive}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconInternet}
                source={IconInternetActive}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Internet & TV</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMiddle}>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconLandline}
                source={IconLandlineActive}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Landline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconBPJS}
                source={IconBPJSActive}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>BPJS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconPDAM}
                source={IconPDAMActive}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>PDAM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container1} />
        <Text style={styles.textBottom}>Active subsribtion</Text>
        <View style={styles.containerRes}>
          <FastImage
            style={styles.imageSubsribtion}
            source={NoBill}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.textSubsribtion}>
            No upcoming bill right now!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: 'white',
    height: hp(100),
    width: wp(100),
  },
  containerSub: {
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
  containerRes: {
    // display: 'flex',
    borderRadius: moderateScale(20),
    top: hp(7),
    backgroundColor: 'white',
    width: moderateScale(332),
    height: moderateScale(285),
    alignSelf: 'center',
  },
  imageSubsribtion: {
    height: moderateScale(160),
    width: moderateScale(215),
    alignSelf: 'center',
    top: moderateScale(40),
  },
  textSubsribtion: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    top: moderateScale(45),
  },
});
