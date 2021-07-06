import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  IconBPJSActive,
  IconCloseWhite,
  ButtonDownload,
} from '../../Assets/Assets';

const ResultPaymentBPJS = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <View style={styles.ContainerHeaderPayment}>
          <View style={styles.HeaderPayment}>
            <Text style={styles.Judul}>BPJS</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <FastImage
                style={styles.Logo}
                source={IconCloseWhite}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.ContainerListPayment}>
              <View style={styles.ContainerLogo}>
                <FastImage
                  style={styles.Logo}
                  source={IconBPJSActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerText}>
                <Text style={styles.TextList}>BPJS</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Containerisi}>
          <View style={styles.Headerisi}>
            <Text style={styles.TitleIsi}>Please complete your payment in</Text>
            <Text
              style={{
                fontSize: moderateScale(13),
                fontFamily: 'Montserrat-Bold',
              }}>
              59min 59s
            </Text>
          </View>
          <View style={styles.ContainerForm1}>
            <View style={styles.Form1}>
              <Text>Total</Text>
              <Text style={styles.textRes}>RP 51.500,000</Text>
            </View>
            <View style={styles.Form1}>
              <Text>Bank</Text>
              <Text style={styles.textRes}>Bank Central Asia</Text>
            </View>
            <View style={styles.Form1}>
              <Text>Account Name</Text>
              <Text style={styles.textRes}>PT.Biller Indonesia</Text>
            </View>
            <View style={styles.Form1}>
              <Text>Account No</Text>
              <Text style={styles.textRes}>1234567890</Text>
            </View>
            <TouchableOpacity
              style={styles.ContainerAdd}
              onPress={() =>
                props.navigation.navigate('AddPaymentCardElectric')
              }>
              <Text style={styles.TextAddCard}>Upload Receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContainerDetail}>
          <View style={styles.ContainerTextBillDetail1}>
            <Text style={styles.TextHeadBill}>Bill Details</Text>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>No VA</Text>
              <Text style={styles.TextDataRes}>000000012345678</Text>
            </View>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>Fullname</Text>
              <Text style={styles.TextDataRes}>Justin Junedi</Text>
            </View>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>Branch</Text>
              <Text style={styles.TextDataRes}>Surabaya</Text>
            </View>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>Family Member</Text>
              <Text style={styles.TextDataRes}>4</Text>
            </View>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>Payment Period</Text>
              <Text style={styles.TextDataRes}>May 2021 - June 2021</Text>
            </View>
            <Text style={styles.TextData2}>2 month</Text>
          </View>
          <View style={styles.ContainerTextBillDetail2}>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>Bill</Text>
              <Text style={styles.TextDataRes}>Rp 1.224.000,00</Text>
            </View>
            <View style={styles.ContainerTextData}>
              <Text style={styles.TextData}>Admin</Text>
              <Text style={styles.TextDataRes}>Rp 2.500,00</Text>
            </View>
            <View style={styles.ContainerTextData}>
              <Text style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                Total
              </Text>
              <Text style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                Rp 1.226.500,00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPaymentBPJS;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
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
    justifyContent: 'space-between',
    marginTop: moderateScale(12),
    marginLeft: moderateScale(29),
    marginRight: moderateScale(36),
  },

  Judul: {
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
    marginTop: moderateScale(13),
    marginLeft: moderateScale(28),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(38),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  Headerisi: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  TitleIsi: {
    marginTop: moderateScale(32),
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
  },

  ContainerForm1: {
    marginTop: moderateScale(18),
  },
  Form1: {
    marginTop: moderateScale(8),
    marginRight: moderateScale(24),
    marginLeft: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContainerAdd: {
    marginTop: moderateScale(24),
    marginBottom: moderateScale(24),
    height: moderateScale(43),
    width: moderateScale(290),
    borderWidth: moderateScale(1),
    backgroundColor: 'white',
    borderColor: '#999999',
    borderRadius: moderateScale(1),
    alignSelf: 'center',
    borderStyle: 'dashed',
  },

  TextAddCard: {
    paddingTop: moderateScale(12),
    alignSelf: 'center',
  },

  ContainerDetail: {
    marginTop: moderateScale(28),
    marginLeft: moderateScale(28),
    marginBottom: moderateScale(32),
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
    marginTop: moderateScale(12),
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
});
