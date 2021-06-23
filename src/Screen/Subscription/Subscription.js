import React from 'react';
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
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconFilter, IconElectricity} from '../../Assets/Assets';

const Subscription = () => {
  return (
    <SafeAreaView>
      {/* Headerr  */}
      <ScrollView style={styles.containerSub}>
        <View style={styles.containerHead}>
          <Text style={styles.TextHead}>Recurring Billing</Text>
          <TouchableOpacity>
            <FastImage
              style={styles.IconFilter}
              source={IconFilter}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ResFilter}>
          <View style={styles.ContainerTexFil}>
            <Text style={styles.textfil}>Actived</Text>
          </View>
          <View style={styles.ContainerTexFil}>
            <Text style={styles.textfil}>Planing</Text>
          </View>
        </View>
        {/* DATA adA */}
        <View style={styles.ContainerRes}>
          <View style={styles.status}>
            <Text style={styles.textStatus}> Last payment date:</Text>
            <Text style={styles.textResStatus}> 30 May 2021</Text>
          </View>
          <View style={styles.ContainerFild}>
            <Text style={styles.StatusBilled}>Billed Every Monday</Text>

            {/* LIST PAYMENT */}
            <View style={styles.containerbill}>
              <View style={styles.ContainerIconPayment}>
                <FastImage
                  style={styles.IconPayment}
                  source={IconElectricity}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerListBill}>
                <View>
                  <Text style={styles.TextIcon1}>PLN - Token</Text>
                  <Text style={styles.TextIcon2}>141234567890</Text>
                </View>
                <Text style={styles.TextIcon3}>Rp.50000</Text>
              </View>
            </View>
            <View style={styles.containerbill}>
              <View style={styles.ContainerIconPayment}>
                <FastImage
                  style={styles.IconPayment}
                  source={IconElectricity}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerListBill}>
                <View>
                  <Text style={styles.TextIcon1}>PLN - Token</Text>
                  <Text style={styles.TextIcon2}>141234567890</Text>
                </View>
                <Text style={styles.TextIcon3}>Rp.50000</Text>
              </View>
            </View>
            <View style={styles.CountDayLeft}>
              <Text style={styles.TextCount}>
                1 day late payment fee (0,5%)
              </Text>
              <Text style={styles.TextCount2}>Rp.5000</Text>
            </View>
            <View style={styles.ContainerTotalCount}>
              <View style={styles.TotalCount}>
                <Text style={styles.TextTotal}>Total</Text>
                <Text style={styles.TextTotalCount}>Rp.100000</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text>Create New</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  containerSub: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
  },
  containerHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: heightPercentageToDP(2),
    paddingLeft: widthPercentageToDP(5),
    paddingRight: widthPercentageToDP(7),
  },
  TextHead: {
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
  },
  IconFilter: {
    height: heightPercentageToDP(4),
    width: widthPercentageToDP(5),
  },
  ResFilter: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: heightPercentageToDP(5),
    paddingTop: heightPercentageToDP(1),
    paddingLeft: widthPercentageToDP(5),
    paddingRight: widthPercentageToDP(7),
  },
  ContainerTexFil: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: moderateScale(80),
    height: moderateScale(28),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.9,
  },
  textfil: {
    color: '#263765',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerRes: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(50),
    alignSelf: 'center',
  },
  ContainerFild: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(40),
    alignSelf: 'center',
    paddingLeft: widthPercentageToDP(5),
  },
  resText: {
    color: '#263765',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    backgroundColor: '#EB5757',
    borderTopStartRadius: moderateScale(20),
    borderTopEndRadius: moderateScale(20),
    height: heightPercentageToDP(5),
    padding: moderateScale(10),
    flexDirection: 'row',
  },
  textStatus: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: moderateScale(10),
  },
  textResStatus: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: moderateScale(5),
  },
  StatusBilled: {
    color: '#263765',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'flex-end',
    padding: moderateScale(18),
  },

  containerbill: {
    paddingTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  ContainerIconPayment: {
    display: 'flex',
    borderRadius: 5,
    backgroundColor: '#EBEDF4',
    width: widthPercentageToDP(9),
    height: heightPercentageToDP(5),
  },

  IconPayment: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(3),
    alignSelf: 'center',
  },
  ContainerListBill: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextIcon1: {
    color: '#333333',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: moderateScale(15),
  },
  TextIcon2: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: moderateScale(15),
  },
  TextIcon3: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: moderateScale(120),
  },
  CountDayLeft: {
    paddingTop: moderateScale(20),
    flexDirection: 'row',
  },
  TextCount: {
    color: '#EB5757',
  },
  TextCount2: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: moderateScale(90),
  },

  ContainerTotalCount: {
    paddingRight: moderateScale(20),
    paddingTop: moderateScale(20),
  },

  TotalCount: {
    backgroundColor: '#EBEDF4',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(10),
  },

  TextTotal: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },
  TextTotalCount: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },
});
