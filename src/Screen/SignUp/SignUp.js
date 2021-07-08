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
import {signupAction} from './redux/action';
import Loading from '../../Component/Loading/Loading';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = props => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData = () => {
    dispatch(
      signupAction({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),
    );
  };

  const isSignup = useSelector(state => state.SignupReducer.isSignup);
  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  useEffect(() => {
    if (isSignup) {
      props.navigation.navigate('Login');
    }
  }, [isSignup, props.navigation]);
  return (
    <LinearGradient
      colors={['#C3FFED', '#FFC8D5', '#FFFFFF']}
      opacity={0.8}
      start={{x: 0.0, y: 1.0}}
      end={{x: 0.5, y: 0.0}}
      locations={[0, 0.26, 0.8]}
      style={styles.container}>
      <KeyboardAvoidingView>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <LinearGradient
              colors={['#364F90', '#9CCCBE', '#FAC9D6']}
              start={{x: 1.0, y: 1.0}}
              end={{x: 0.1, y: 0.1}}
              locations={[0, 0.84, 1.0]}
              style={[styles.bigRect, styles.top]}>
              <View style={styles.containerHead}>
                <FastImage
                  style={styles.imageBiller}
                  source={require('../../Assets/Images/FullLogo.png')}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </LinearGradient>

            <View style={styles.topContainer}>
              <Text style={styles.text1}>Getting Started</Text>
              <View style={styles.textLogin}>
                <Text style={styles.text2}>Already have account? </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text style={styles.text3}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TextInput
              style={styles.textContainer1}
              placeholder="FirstName"
              placeholderTextColor="#999999"
              onChangeText={text => setFirstName(text)}
            />
            <TextInput
              style={styles.textContainer2}
              placeholder="LastName"
              placeholderTextColor="#999999"
              onChangeText={text => setLastName(text)}
            />
            <TextInput
              style={styles.textContainer3}
              placeholder="Email"
              placeholderTextColor="#999999"
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.textContainer4}
              placeholder="Password"
              placeholderTextColor="#999999"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              onPress={submitData}
              style={styles.ContainerButtonSubs}>
              <View style={styles.ButtonSubs}>
                <Text style={styles.TextButtonSubs}>Signup</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bigRect: {
    height: moderateScale(380),
    width: moderateScale(382),
    opacity: 0.8,
    borderRadius: moderateScale(60),
    transform: [{rotate: '-45deg'}],
  },
  top: {
    position: 'absolute',
    top: moderateScale(-400),
    right: moderateScale(-110),
  },
  containerHead: {
    transform: [{rotate: '45deg'}],
    alignItems: 'flex-end',
    paddingTop: 225,
    paddingRight: 100,
  },
  imageBiller: {
    height: 100,
    width: 100,
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
    bottom: moderateScale(10),
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
    paddingLeft: 10,
  },
  textContainer1: {
    width: 344,
    height: 42,
    alignSelf: 'center',
    borderRadius: moderateScale(4),
    top: moderateScale(20),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer2: {
    width: 344,
    height: 42,
    alignSelf: 'center',
    borderRadius: moderateScale(4),
    top: moderateScale(35),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer3: {
    width: 344,
    height: 42,
    alignSelf: 'center',
    borderRadius: moderateScale(4),
    top: moderateScale(50),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer4: {
    width: 344,
    height: 42,
    alignSelf: 'center',
    borderRadius: moderateScale(4),
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
    borderRadius: moderateScale(6),
    height: moderateScale(42),
    width: moderateScale(344),
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
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(5),
  },
});
