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
  NoBill,
} from '../../Assets/Images/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {SearchBar} from 'react-native-elements';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.containerSub}>
          <View style={styles.containerHead}>
            <FastImage
              style={styles.imageBiller}
              source={IconBiller}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.StyleText}>biller</Text>
            <FastImage
              style={styles.imageBell}
              source={IconBell}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.containerTop}>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIcon}
                source={IconElectricity}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIcon}
                source={IconMobile}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIcon}
                source={IconInternet}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Internet & TV</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMiddle}>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIcon}
                source={IconLandLine}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Landline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIcon}
                source={IconBPJS}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>BPJS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <FastImage
                style={styles.imageIcon}
                source={IconPDAM}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>PDAM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerBottom} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: hp(100),
    width: wp(100),
  },
  containerSub: {
    backgroundColor: '#263765',
    borderBottomLeftRadius: hp(12),
    borderBottomRightRadius: hp(12),
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
  imageIcon: {
    height: moderateScale(44),
    width: moderateScale(32),
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
  },
  textInButton: {
    top: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  containerMiddle: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(8),
  },
  // containerBottom: {
  //   width: 220,
  //   height: 200,
  //   borderRadius: 100,
  //   backgroundColor: '#263765',
  //   transform: [{scaleX: 2}],
  //   marginLeft: 97,
  //   top: -105,
  // },
});
