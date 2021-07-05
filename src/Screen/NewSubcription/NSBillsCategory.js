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
// background
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
// Icon
import {
  ArrowBack,
  IconElectricityActive,
  IconMobileActive,
  IconInternetActive,
  IconLandlineActive,
  IconPDAMActive,
  IconBPJSActive,
} from '../../Assets/Assets';

const NSBillsCategory = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundPurple>
        <ScrollView>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity style={styles.iconTop}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Bills Category</Text>
          </View>
          <View>
            <View style={styles.allToken}>
              <TouchableOpacity
                style={styles.containerToken}
                onPress={() => console.log('press')}>
                <FastImage
                  style={styles.Electricity}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>Electricity</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity style={styles.containerToken}>
                <FastImage
                  style={styles.Electricity}
                  source={IconMobileActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>Mobile</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity style={styles.containerToken}>
                <FastImage
                  style={styles.Electricity}
                  source={IconInternetActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>Internet & TV</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity style={styles.containerToken}>
                <FastImage
                  style={styles.Electricity}
                  source={IconLandlineActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>Landline</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity style={styles.containerToken}>
                <FastImage
                  style={styles.Electricity}
                  source={IconPDAMActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>PDAM</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity style={styles.containerToken}>
                <FastImage
                  style={styles.Electricity}
                  source={IconBPJSActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>BPJS</Text>
            </View>
          </View>
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default NSBillsCategory;

const styles = StyleSheet.create({
  HeaderBilling: {
    flexDirection: 'row',
    width: wp(100),
    height: hp(8),
  },
  iconTop: {
    top: moderateScale(24),
    left: moderateScale(25),
  },
  ArrowBack: {
    height: hp(2),
    width: wp(6),
  },
  Judul: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(20),
    left: moderateScale(45),
  },
  allToken: {
    flexDirection: 'row',
    top: moderateScale(10),
    left: moderateScale(25),
    height: moderateScale(70),
  },
  containerToken: {
    width: moderateScale(55),
    height: moderateScale(54),
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
  },
  Electricity: {
    backgroundColor: 'white',
    height: moderateScale(30),
    width: moderateScale(22),
    alignSelf: 'center',
    top: moderateScale(10),
  },
  huruf: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(15),
    left: moderateScale(20),
    color: 'white',
  },
});
