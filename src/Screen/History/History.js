import React, {useState} from 'react';
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
import {
  IconFilter,
  IconElectricityActive,
  IconMobileActive,
  ButtonClose,
} from '../../Assets/Assets';
import {Overlay, BottomSheet, CheckBox} from 'react-native-elements';

const History = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerAll}>
        <View style={styles.containerHead}>
          <View style={styles.HeaderBilling}>
            <Text style={styles.Judul}>History</Text>
            <View style={styles.lokasiFilter}>
              <TouchableOpacity onPress={toggleOverlay}>
                <FastImage
                  style={styles.IconFilter}
                  source={IconFilter}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textTanggal}>12 May 2021</Text>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.containerBillAtas}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#EBEDF4',
              borderBottomWidth: 1,
              width: wp(92),
              alignSelf: 'center',
              top: moderateScale(25),
            }}
          />
          <View style={styles.containerBillBawah}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#EBEDF4',
              borderBottomWidth: 1,
              width: wp(92),
              alignSelf: 'center',
              top: moderateScale(45),
            }}
          />
          <View style={styles.containerBillPalingBawah}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconMobileActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>Pulsa - Telkomsel</Text>
                  <Text style={styles.textNo}>082134567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.textTanggal}>10 May 2021</Text>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.containerBillAtas}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#EBEDF4',
              borderBottomWidth: 1,
              width: wp(92),
              alignSelf: 'center',
              top: moderateScale(25),
            }}
          />
          <View style={styles.containerBillBawah}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#EBEDF4',
              borderBottomWidth: 1,
              width: wp(92),
              alignSelf: 'center',
              top: moderateScale(45),
            }}
          />
          <View style={styles.containerBillPalingBawah}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconMobileActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>Pulsa - Telkomsel</Text>
                  <Text style={styles.textNo}>082134567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.textTanggal}>8 May 2021</Text>
        </View>
        <View style={styles.singleContainer}>
          <View style={styles.containerBillAtas}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.textTanggal}>12 May 2021</Text>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.containerBillAtas}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#EBEDF4',
              borderBottomWidth: 1,
              width: wp(92),
              alignSelf: 'center',
              top: moderateScale(25),
            }}
          />
          <View style={styles.containerBillBawah}>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.seeDetail}>
              <Text style={styles.textseeDetail}>see receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomSheet isVisible={visible}>
        <View style={styles.containerOverlay}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <FastImage
              style={styles.imageCloseOverlay}
              source={ButtonClose}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
          <View style={styles.textFilterContainer}>
            <Text style={styles.textFilter}>Filter</Text>
          </View>
          <Text style={{alignSelf: 'center'}}>
            {' '}
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - -
          </Text>
          <CheckBox
            onPress={() => setCheck1(!check1)}
            title="Today"
            checked={check1}
          />
          <CheckBox
            onPress={() => setCheck2(!check2)}
            title="Last week"
            checked={check2}
          />
          <CheckBox
            onPress={() => setCheck3(!check3)}
            title="Last month"
            checked={!check3}
          />
          <CheckBox
            onPress={() => setCheck4(!check4)}
            title="Last 3 months"
            checked={!check4}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: '#EBEDF4',
    flexGrow: 1,
    paddingBottom: moderateScale(150),
  },
  containerHead: {
    backgroundColor: '#263765',
    height: moderateScale(60),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  HeaderBilling: {
    marginTop: moderateScale(14),
    marginLeft: moderateScale(24),
    flexDirection: 'row',
  },
  lokasiFilter: {
    alignSelf: 'center',
    left: moderateScale(250),
  },
  IconFilter: {
    width: moderateScale(19),
    height: moderateScale(12),
  },
  Judul: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  textTanggal: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    left: moderateScale(10),
    paddingBottom: moderateScale(5),
    paddingTop: moderateScale(5),
  },
  topContainer: {
    backgroundColor: 'white',
    height: moderateScale(220),
  },
  singleContainer: {
    height: moderateScale(80),
    backgroundColor: 'white',
  },
  containerBillAtas: {
    // backgroundColor: 'green',
    top: moderateScale(15),
  },
  containerBillBawah: {
    // backgroundColor: 'blue',
    top: moderateScale(35),
  },
  containerBillPalingBawah: {
    top: moderateScale(55),
  },
  containerData1: {
    flexDirection: 'row',
    // top: moderateScale(41),
    width: moderateScale(350),
    alignSelf: 'center',
  },
  containerToken: {
    width: moderateScale(32),
    height: moderateScale(32),
    backgroundColor: '#EBEDF4',
  },
  imageToken: {
    width: moderateScale(13),
    height: moderateScale(17),
    alignSelf: 'center',
    top: moderateScale(7),
  },
  boxText: {
    flexDirection: 'row',
    width: moderateScale(300),
    left: moderateScale(10),
    justifyContent: 'space-between',
  },
  textPLN: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    color: '#333333',
  },
  textNo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#828282',
  },
  data2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#333333',
  },
  seeDetail: {
    left: moderateScale(56),
  },
  textseeDetail: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(10),
    textDecorationLine: 'underline',
  },
  boxKecil: {
    display: 'flex',
    width: moderateScale(290),
    height: moderateScale(42),
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    top: moderateScale(50),
  },
  textDirection: {
    flexDirection: 'row',
  },
  textSelect: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
    color: '#999999',
    top: moderateScale(9),
    left: moderateScale(15),
  },
  imageLine: {
    height: moderateScale(10),
    width: moderateScale(15),
    // top: moderateScale(15),
    // left: moderateScale(160),
  },
  containerBox2: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: moderateScale(332),
    height: moderateScale(301),
    alignSelf: 'center',
    marginBottom: moderateScale(40),
    top: moderateScale(30),
    elevation: 10,
  },
  containerOverlay: {
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  imageCloseOverlay: {
    width: moderateScale(13),
    height: moderateScale(17),
    top: moderateScale(7),
    left: moderateScale(345),
  },
  textFilterContainer: {
    left: moderateScale(22),
  },
  textFilter: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
});
