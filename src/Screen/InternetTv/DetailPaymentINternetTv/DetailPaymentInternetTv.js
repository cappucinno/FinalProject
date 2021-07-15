import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import {moderateScale} from 'react-native-size-matters';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import bcrypt from 'react-native-bcrypt';
import {useSelector, useDispatch} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Overlay} from 'react-native-elements';
import {
  ArrowBack,
  CheckBox1,
  CheckActive,
  InfoPayment,
  IconSubscribtion,
  IconInternetActive,
} from '../../../Assets/Assets';
import Loading from '../../../Component/Loading/Loading';

const DetailPaymentBPJS = props => {
  const [cheked, setCheked] = useState(false);
  const [period, setPeriod] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Every Week', value: 'Every Week'},
    {label: 'Every Month', value: 'Every Month'},
    {label: 'Every Year', value: 'Every Year'},
  ]);
  const [day, setDay] = useState('');
  const [valueDay, setValueDay] = useState('');
  const [itemsDay, setItemsDay] = useState([
    {label: 'Sunday', value: 'Sunday'},
    {label: 'Monday', value: 'Monday'},
    {label: 'Tuesday', value: 'Tuesday'},
  ]);
  const [visible, setVisible] = useState(false);
  const [pinuser, setPinUser] = useState('');

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Using Math.random']);
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const DetailRes = useSelector(
    state => state.inTvOptionReducer?.dataUser.data,
  );
  console.log(DetailRes, '<=== hasil resDetail InTv');

  const CompareToken = () => {
    let resCompare = bcrypt.compareSync(pinuser, DetailRes.pin);
    console.log(resCompare, '<=====ini compare token');
    resCompare ? props.navigation.navigate('ResultPaymentInternetTv') : null;
  };

  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            <View style={styles.ContainerHeaderPayment}>
              <View style={styles.HeaderPayment}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <FastImage
                    style={styles.ArrowBack}
                    source={ArrowBack}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.Judul}>Internet & TV</Text>
              </View>
              <View>
                <View style={styles.ContainerListPayment}>
                  <View style={styles.ContainerLogo}>
                    <FastImage
                      style={styles.Logo}
                      source={IconInternetActive}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                  <View style={styles.ContainerText}>
                    <Text style={styles.TextList}>{DetailRes?.provider}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.Containerisi}>
              <View style={styles.ContainerTextBillDetail1}>
                <Text style={styles.TextHeadBill}>Bill Details</Text>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>No Costomer</Text>
                  <Text style={styles.TextDataRes}>
                    {DetailRes?.customer_number}
                  </Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Fullname</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.name}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Address</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.address}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Payment Period</Text>
                  <Text style={styles.TextDataRes}>
                    {DetailRes?.payment_period}
                  </Text>
                </View>
              </View>
              <View style={styles.ContainerTextBillDetail2}>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Bill</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.bill}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Late Payment</Text>
                  <Text style={styles.TextDataRes}>
                    {DetailRes?.late_payment}
                  </Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Admin</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.admin_fee}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text
                    style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                    Total
                  </Text>
                  <Text
                    style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                    {DetailRes?.total}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.PaymentMethod}>
              <View style={styles.ContainerTextPaymentMethod}>
                <Text style={styles.TextPaymentMethod}>Payment Method</Text>
                <View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('PaymentMethod')}>
                    <Text style={styles.TextChange}>change</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.ResPaymentMethod}>Bank Transfer</Text>
            </View>
            <View
              style={[
                styles.RecurringBilling,
                {
                  height: cheked
                    ? heightPercentageToDP(52)
                    : heightPercentageToDP(13),
                },
              ]}>
              <View style={styles.ContainerRecurringBilling}>
                <TouchableOpacity onPress={() => setCheked(!cheked)}>
                  <FastImage
                    style={styles.CheckBox}
                    source={cheked ? CheckActive : CheckBox1}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.HeaderRecurring}>Recurring Billing</Text>
              </View>
              <Text style={styles.TextIsiRecurring}>
                Users will be able to make multiple billing subscriptions on
                selected pay dates.
              </Text>
              <View>
                {cheked ? (
                  <View style={styles.ContainerDropButton}>
                    <Text style={styles.HeaderDropdown}>Period</Text>
                    <DropDownPicker
                      placeholder="Select an Period"
                      style={styles.dropDownContainerStyle}
                      dropDownDirection="BOTTOM"
                      open={period}
                      value={value}
                      items={items}
                      setOpen={setPeriod}
                      setValue={setValue}
                      setItems={setItems}
                    />
                    <Text style={styles.HeaderDropdown}>Day</Text>
                    <DropDownPicker
                      disabled={!value}
                      placeholder="Select an Day"
                      style={styles.dropDownContainerStyle}
                      dropDownDirection="BOTTOM"
                      open={day}
                      value={valueDay}
                      items={itemsDay}
                      setOpen={setDay}
                      setValue={setValueDay}
                      setItems={setItemsDay}
                    />
                    <View style={styles.ContainerInfoPayment}>
                      <FastImage
                        style={styles.InfoPaymentStyle}
                        source={InfoPayment}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                      <View style={styles.TextInfoContainer}>
                        <Text style={styles.TextInfo1}>
                          Next payment will due {''}
                          <Text
                            style={{
                              fontFamily: 'Montserrat-Bold',
                              color: '#263765',
                            }}>
                            17 May 2021
                          </Text>
                        </Text>
                        <Text style={styles.TextInfo1}>
                          Pay before 20 May 2021, 23:59 to avoid late payment
                          fee
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={toggleOverlay}
                style={styles.ContainerButton}>
                <View>
                  <Text style={styles.TextButtonBuy}>
                    Pay : <Text>{DetailRes?.total}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      <Overlay
        style={stylesOverlay.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View style={stylesOverlay.container}>
          <Text style={stylesOverlay.header}>
            Please Submite Your PIN to Continue
          </Text>
          <FastImage
            style={stylesOverlay.ImgPin}
            source={IconSubscribtion}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={stylesOverlay.inputTitle}>
            <SmoothPinCodeInput
              cellSize={54}
              codeLength={6}
              mask={
                <View
                  style={{
                    width: moderateScale(10),
                    height: moderateScale(10),
                    borderRadius: moderateScale(25),
                    backgroundColor: '#000000',
                  }}
                />
              }
              editable={true}
              maskDelay={1000}
              password={true}
              cellStyle={null}
              cellStyleFocused={null}
              value={pinuser}
              onTextChange={setPinUser}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={CompareToken}
              style={stylesOverlay.ContainerButton}>
              <View>
                <Text style={stylesOverlay.TextButtonBuy}>SUBMITE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default DetailPaymentBPJS;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(1),
    backgroundColor: 'white',
  },
  ContainerHeaderPayment: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(13),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  HeaderPayment: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(12),
    marginLeft: moderateScale(34),
    marginRight: moderateScale(36),
  },
  ArrowBack: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
  },
  Judul: {
    marginLeft: moderateScale(16),
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  ContainerListPayment: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ContainerLogo: {
    marginLeft: widthPercentageToDP(8),
    marginTop: heightPercentageToDP(2),
    width: widthPercentageToDP(8),
    height: heightPercentageToDP(4),
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: moderateScale(8),
  },
  Logo: {
    alignSelf: 'center',
    width: widthPercentageToDP(4),
    height: heightPercentageToDP(4),
  },
  ContainerText: {
    marginTop: moderateScale(21),
    marginLeft: moderateScale(12),
  },
  TextList: {
    color: '#ffffff',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
  },
  Containerisi: {
    marginTop: moderateScale(53),
    marginLeft: moderateScale(28),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(48),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  ContainerTextBillDetail1: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: moderateScale(18),
    marginLeft: moderateScale(18),
  },
  ContainerTextBillDetail2: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: moderateScale(24),
    marginLeft: moderateScale(18),
  },
  TextHeadBill: {
    marginBottom: moderateScale(24),
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  ContainerTextData: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: moderateScale(12),
    marginRight: moderateScale(24),
  },
  TextData: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  TextData2: {
    alignSelf: 'flex-end',
    marginTop: moderateScale(4),
    marginRight: moderateScale(24),
  },
  TextDataRes: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  PaymentMethod: {
    marginTop: moderateScale(30),
    marginLeft: moderateScale(28),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(12),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  ContainerTextPaymentMethod: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: moderateScale(18),
    marginLeft: moderateScale(18),
  },
  TextPaymentMethod: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  TextChange: {
    marginRight: moderateScale(24),
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    textDecorationLine: 'underline',
  },
  ResPaymentMethod: {
    marginTop: moderateScale(12),
    marginLeft: moderateScale(18),
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  RecurringBilling: {
    marginTop: moderateScale(30),
    marginLeft: moderateScale(28),
    marginBottom: moderateScale(64),
    width: widthPercentageToDP(85),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  CheckBox: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
    marginRight: moderateScale(18),
  },
  ContainerRecurringBilling: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    marginLeft: moderateScale(18),
  },
  HeaderRecurring: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(1),
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
  },
  TextIsiRecurring: {
    marginTop: moderateScale(1),
    marginLeft: moderateScale(55),
    color: '#828282',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(10),
  },
  ContainerDropButton: {
    flexDirection: 'column',
    marginTop: moderateScale(8),
    marginLeft: moderateScale(18),
    marginRight: moderateScale(18),
  },
  HeaderDropdown: {
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    marginBottom: moderateScale(12),
    marginTop: moderateScale(18),
  },
  dropDownContainerStyle: {
    backgroundColor: 'white',
    marginBottom: moderateScale(1),
    zIndex: 1000,
  },
  ContainerButton: {
    backgroundColor: '#4493AC',
    alignItems: 'center',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(87),
    marginLeft: moderateScale(24),
    marginBottom: moderateScale(64),
  },
  TextButtonBuy: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(11),
  },
  ContainerInfoPayment: {
    alignItems: 'center',
  },
  InfoPaymentStyle: {
    height: moderateScale(111),
    width: moderateScale(285),
  },
  TextInfoContainer: {
    paddingLeft: moderateScale(12),
    position: 'absolute',
    margin: moderateScale(26),
  },
  TextInfo1: {
    fontSize: moderateScale(11),
    color: '#263765',
    fontFamily: 'Montserrat-Regular',
  },
});

const stylesOverlay = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingStart: moderateScale(20),
    paddingEnd: moderateScale(20),
    margin: -16,
  },
  header: {
    marginTop: moderateScale(14),
    marginBottom: moderateScale(24),
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
  },

  inputTitle: {
    alignSelf: 'stretch',
    marginTop: moderateScale(16),
    backgroundColor: '#EBEDF4',
    borderRadius: moderateScale(19),
    fontFamily: 'Roboto-Bold',
  },
  ContainerButton: {
    backgroundColor: '#4493AC',
    alignItems: 'center',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(79),
    marginTop: moderateScale(60),
    marginBottom: moderateScale(8),
  },
  TextButtonBuy: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(11),
  },
  ImgPin: {
    height: moderateScale(120),
    width: moderateScale(120),
  },
});
