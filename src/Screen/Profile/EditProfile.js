import React, {useState, useEffect} from 'react';
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
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileOptionAction} from './redux/action';

const EditProfile = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const dispatch = useDispatch();

  const DetailRes = useSelector(
    state => state.ProfileReducer?.dataOption.data.account,
  );
  console.log(DetailRes, '<=== hasil resDetail Profile');

  useEffect(() => {
    dispatch(ProfileOptionAction());
  }, [dispatch]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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

        <View style={styles.userInfoSection}>
          <View style={{marginTop: 30}}>
            <FastImage
              style={styles.iconProfile}
              source={IconProfile}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.textName}>
                {DetailRes?.first_name} {DetailRes?.last_name}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.action}>
          <TextInput
            style={styles.textContainer1}
            placeholder="First Name"
            placeholderTextColor="#999999"
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            style={styles.textContainerOther}
            placeholder="Last Name"
            placeholderTextColor="#999999"
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            style={styles.textContainerOther}
            placeholder="Email"
            placeholderTextColor="#999999"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.textContainerOther}
            placeholder="Password"
            placeholderTextColor="#999999"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.textContainerOther}
            placeholder="PIN"
            placeholderTextColor="#999999"
            secureTextEntry
            onChangeText={text => setPin(text)}
          />
        </View>
        <TouchableOpacity style={styles.ContainerButtonSubs}>
          <View style={styles.ButtonSubs}>
            <Text style={styles.TextButtonSubs}>Submit</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    borderBottomRightRadius: moderateScale(15),
    borderBottomLeftRadius: moderateScale(15),
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
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    alignSelf: 'center',
  },
  iconProfile: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  nameContainer: {
    marginTop: moderateScale(8),
  },
  textName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
    alignSelf: 'center',
  },
  action: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textContainer1: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(20),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainerOther: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(20),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
    marginTop: moderateScale(20),
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
    marginTop: moderateScale(30),
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
