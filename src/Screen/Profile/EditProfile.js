import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {BottomSheet} from 'react-native-elements';
import {ArrowBack, IconProfile, IconEditProfile} from '../../Assets/Assets';

const EditProfile = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconDistance}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FastImage
              style={styles.ArrowBack}
              source={ArrowBack}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
          <Text style={styles.textEdit}>Edit Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#263765',
    height: hp(8),
  },
  ArrowBack: {
    height: hp(2),
    width: wp(6),
    marginTop: moderateScale(10),
  },
  iconDistance: {
    width: moderateScale(330),
    height: hp(5),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  textEdit: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(18),
    color: 'white',
    paddingTop: moderateScale(5),
    left: moderateScale(90),
  },
});
