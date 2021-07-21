import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  ArrowBack,
  IconEditProfilePict,
  IconEditProfile,
  IconEditPassword,
  IconEditPin,
} from '../../Assets/Assets';

const Profile = props => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(ProfileOptionAction());
  // }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconDistance}>
          <Text style={styles.textAccount}>Account</Text>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity>
            <FastImage
              style={styles.iconProfile}
              source={IconEditProfilePict}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>

          <View style={styles.nameContainer}>
            <Text style={styles.textName}>Profile.firstName lastName={}</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
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

      <View>
        <TouchableOpacity style={styles.changeContainer}>
          <FastImage
            style={styles.iconEdit}
            source={IconEditPassword}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.menuItemText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.changeContainer}>
          <FastImage
            style={styles.iconEdit}
            source={IconEditPin}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.menuItemText}>Change PIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={50} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'SET_IS_LOGOUT'});
            props.navigation.navigate('Login');
          }}>
          <View style={styles.menuItem2}>
            <Text style={styles.menuItemText2}>LOG OUT</Text>
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
    width: moderateScale(100),
    height: moderateScale(100),
  },
  iconEdit: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  nameContainer: {
    marginTop: moderateScale(18),
    left: moderateScale(25),
    // justifyContent: 'center',
  },
  textName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(20),
    paddingTop: 10,
  },
  textCallName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
    color: '#7284B1',
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
  menuItemTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItem2: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#4493AC',
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 50,
  },
  menuItemText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
  changeContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});
