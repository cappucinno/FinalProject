import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CheckBox} from 'react-native-elements';
import {ArrowBack, CheckActive, CheckBox1} from '../../../Assets/Assets';

const FilterSubscription = props => {
  const DataFilter = {
    Status: ['Active', 'Planed'],
    Category: ['Electricity', 'Mobile', 'Internet', 'Landline', 'PDAM', 'BPJS'],
    Period: ['Weekly', 'Monthly', 'Annualy'],
  };
  const [checked, SetChecked] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.ContainerScroll}>
          <View style={styles.HeaderFillter}>
            <TouchableOpacity>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Filter</Text>
          </View>
        </View>
        <View style={styles.ContainerCheck}>
          <View style={styles.ContainerStatus}>
            <Text style={styles.HeaderStatus}>Status</Text>
          </View>
          {DataFilter.map((e, i) => {
            return (
              <View style={styles.ListCheck} key={i}>
                <TouchableOpacity onPress={() => SetChecked(!checked)}>
                  <FastImage
                    style={styles.Check}
                    source={checked ? CheckActive : CheckBox1}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.IsiFillter}>{e.Status}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterSubscription;

const styles = StyleSheet.create({
  ContainerScroll: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(9),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  HeaderFillter: {
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
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Bold',
  },
  ContainerCheck: {
    marginLeft: moderateScale(34),
    marginTop: moderateScale(16),
  },

  HeaderStatus: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
  },
  garis: {
    paddingLeft: 10,
    height: 6,
    borderStyle: 'dashed',
    borderColor: 'red',
    borderTopColor: 'black',
  },
  Check: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
    marginRight: moderateScale(10),
  },
  ListCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IsiFillter: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
});
