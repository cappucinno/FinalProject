import React, {useState, useEffect} from 'react';
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
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {IconBiller} from '../../Assets/Assets';
import {loginAction} from './redux/action';
import Loading from '../../Component/Loading/Loading';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.GlobalReducer.Loading);
  const isLogged = useSelector(state => state.GlobalReducer.isLogged);

  useEffect(() => {
    if (isLogged) {
      props.navigation.navigate('Mainapp');
    }
  }, [isLogged]);

  const submitLogin = () => {
    dispatch(
      loginAction({
        email: email,
        password: password,
      }),
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={[styles.bigRect, styles.top]} />
          <View style={styles.containerHead}>
            <FastImage
              style={styles.imageBiller}
              source={IconBiller}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.StyleText}>biller</Text>
          </View>

          <View style={styles.topContainer}>
            <Text style={styles.text1}>Welcome Back!</Text>
            <View style={styles.textLogin}>
              <Text style={styles.text2}>Don't have account? </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch({type: 'RESET_AUTH'});
                  props.navigation.navigate('SignUp');
                }}>
                <Text style={styles.text3}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            style={styles.textContainer1}
            placeholder="Email"
            placeholderTextColor="#999999"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.textContainer2}
            placeholder="Password"
            placeholderTextColor="#999999"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={submitLogin}
            style={styles.ContainerButtonSubs}>
            <View style={styles.ButtonSubs}>
              <Text style={styles.TextButtonSubs}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonForgetPassword}>
            <View>
              <Text style={styles.textForgotPassword}>Forgot Password</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  bigRect: {
    height: moderateScale(380),
    width: moderateScale(382),
    // backgroundColor: COLOR.purple.purple10,
    backgroundColor: 'black',
    opacity: 0.05,
    borderRadius: moderateScale(60),
    transform: [{rotate: '-45deg'}],
  },
  top: {
    position: 'absolute',
    top: moderateScale(-200),
    right: moderateScale(-110),
  },
  containerHead: {
    flexDirection: 'row',
    bottom: moderateScale(220),
    left: moderateScale(265),
  },
  imageBiller: {
    height: hp(8),
    width: wp(8),
  },
  StyleText: {
    color: 'black',
    fontSize: moderateScale(24),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
    alignSelf: 'center',
  },
  topContainer: {
    paddingLeft: wp(8),
    bottom: moderateScale(16),
  },
  text1: {
    fontSize: moderateScale(26),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  textLogin: {
    flexDirection: 'row',
    fontSize: moderateScale(12),
    top: moderateScale(5),
  },
  text2: {
    color: '#999999',
  },
  text3: {
    textDecorationLine: 'underline',
    paddingLeft: moderateScale(5),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer1: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(30),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer2: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(50),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer3: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(50),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer4: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(65),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    top: moderateScale(90),
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    width: wp(90),
    elevation: moderateScale(3),
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
  buttonForgetPassword: {
    alignSelf: 'center',
    top: moderateScale(120),
  },
  textForgotPassword: {
    fontSize: moderateScale(14),
    color: '#214457',
    textDecorationLine: 'underline',
  },
});
