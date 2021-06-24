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
import PaymentCard from '../../Component/PaymentCard/PaymentCard';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';

const Subscription = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Headerr  */}
      <ScrollView
        contentContainerStyle={styles.Grow}
        style={styles.containerSub}>
        <BackgroundPurple>
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
            <View style={styles.ContainerTexFil}>
              <Text style={styles.textfil}>Planing</Text>
            </View>
          </View>
          {/* DATA ada */}
          <PaymentCard late={true} />
          <PaymentCard late={false} success={false} />
          <PaymentCard success={true} />
        </BackgroundPurple>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
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
    alignItems: 'center',
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
    marginRight: moderateScale(8),
  },
  textfil: {
    color: '#263765',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
