import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {ArrowBack, IconProfile, IconEditProfile} from '../../Assets/Assets';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconDistance}>
          <Text style={styles.textAccount}>Account</Text>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <FastImage
            style={styles.iconProfile}
            source={IconProfile}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.textName}>John Doe</Text>
            <Text style={styles.textCallName}>@j_doe</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Text style={styles.textAtas}>Rp. 1.000.000</Text>
          <Text style={styles.textBawah}>Wallet</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAtas}>12</Text>
          <Text style={styles.textBawah}>Orders</Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem2}>
            <Icon name="settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText2}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#263765',
    height: hp(8),
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
  },
  iconDistance: {
    width: moderateScale(330),
    height: hp(5),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  textAccount: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(20),
    color: 'white',
    paddingTop: moderateScale(3),
    left: moderateScale(120),
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  iconProfile: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  nameContainer: {
    marginTop: moderateScale(18),
    left: moderateScale(25),
  },
  textName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(20),
  },
  textCallName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
    color: '#7284B1',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAtas: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(20),
    color: '#777777',
  },
  textBawah: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
    color: '#777777',
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItem2: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
  menuItemText2: {
    color: '#777777',
    marginLeft: 28,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
