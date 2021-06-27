import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';

export default class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text>
            Already have account? <TouchableOpacity>Login</TouchableOpacity>
          </Text>
        </View>

        <TextInput placeholder="Firstname" placeholderTextColor="#EFBF7F" />
        <TextInput placeholder="Lastname" placeholderTextColor="#EFBF7F" />
        <TextInput placeholder="Email" placeholderTextColor="#EFBF7F" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#EFBF7F"
          secureTextEntry
        />
        <TouchableOpacity style={styles.ContainerButtonSubs}>
          <View style={styles.ButtonSubs}>
            <Text style={styles.TextButtonSubs}>Signup</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    top: moderateScale(75),
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    width: wp(80),
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
