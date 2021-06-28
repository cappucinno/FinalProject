import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ArrowBack, IconElectricityActive} from '../../../Assets/Assets';

const ListPaymentElectricity = props => {
  const [nometer, setNometer] = useState('');
  const [pres, setPres] = useState('');

  const DataCostomer = '12345';

  const ListHarga = [
    {
      harga: '20.000',
    },
    {
      harga: '50.000',
    },
    {
      harga: '100.000',
    },
    {
      harga: '200.000',
    },
    {
      harga: '500.000',
    },
    {
      harga: '1000.000',
    },
    {
      harga: '5.000.000',
    },
    {
      harga: '10.000.000',
    },
  ];

  const styles = StyleSheet.create({
    Grow: {
      flexGrow: 1,
    },
    container: {
      paddingBottom: moderateScale(100),
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
      marginTop: moderateScale(40),
      marginLeft: moderateScale(20),
      marginRight: moderateScale(20),
      height: heightPercentageToDP(16),
      borderTopStartRadius: moderateScale(8),
      borderTopEndRadius: moderateScale(8),
      borderBottomStartRadius: moderateScale(8),
      borderBottomEndRadius: moderateScale(8),
      backgroundColor: '#EBEDF4',
    },
    ContainerTextInput: {
      marginLeft: moderateScale(24),
      marginTop: moderateScale(24),
    },
    TextHeadNometer: {
      color: '#263765',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
    },
    inputNoMeter: {
      borderRadius: moderateScale(4),
      height: moderateScale(44),
      width: moderateScale(290),
      marginTop: moderateScale(4),
      backgroundColor:
        nometer === ''
          ? 'white'
          : nometer.length <= DataCostomer.length
          ? 'white'
          : nometer !== DataCostomer
          ? '#FFF4F7'
          : 'white',
    },
    TextNotRegister: {
      paddingTop: moderateScale(4),
      alignSelf: 'center',
      color:
        nometer === ''
          ? '#EBEDF4'
          : nometer.length <= DataCostomer.length
          ? '#EBEDF4'
          : nometer !== DataCostomer
          ? '#EB5757'
          : '#EBEDF4',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Regular',
    },
    ContainerHarga: {
      height: moderateScale(433),
      marginTop: moderateScale(24),
      backgroundColor: '#C3CADE',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    ContainerButtonHarga: {
      marginTop: heightPercentageToDP(2),
      marginLeft: moderateScale(28),
    },
    NummberButton: {
      height: moderateScale(70),
      width: moderateScale(150),
      borderTopStartRadius: moderateScale(6),
      borderTopEndRadius: moderateScale(6),
      borderBottomStartRadius: moderateScale(6),
      borderBottomEndRadius: moderateScale(6),
      alignItems: 'center',
    },
    TextNumber: {
      marginTop: moderateScale(24),
      color: '#000000',
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Bold',
    },
    ContainerButtonConfirm: {
      marginLeft: moderateScale(27),
      marginTop: moderateScale(25),
    },
    ButtonConfirm: {
      backgroundColor: '#4493AC',
      borderTopStartRadius: moderateScale(5),
      borderTopEndRadius: moderateScale(5),
      borderBottomStartRadius: moderateScale(5),
      borderBottomEndRadius: moderateScale(5),
      height: heightPercentageToDP(6),
      width: widthPercentageToDP(87),
      alignItems: 'center',
    },
    TextButtonConfirm: {
      color: 'white',
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Bold',
      paddingTop: moderateScale(11),
    },
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <View style={styles.ContainerHeaderPayment}>
          <View style={styles.HeaderPayment}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Electricity</Text>
          </View>
          <View>
            <View style={styles.ContainerListPayment}>
              <View style={styles.ContainerLogo}>
                <FastImage
                  style={styles.Logo}
                  source={IconElectricityActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerText}>
                <Text style={styles.TextList}>PLN-Token</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Containerisi}>
          <View style={styles.ContainerTextInput}>
            <Text style={styles.TextHeadNometer}>Nomer Meter</Text>
            <TextInput
              style={styles.inputNoMeter}
              onChangeText={setNometer}
              value={nometer}
              placeholder=" E.g 141234567890"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.TextNotRegister}>Number Not Registered</Text>
        </View>
        <View style={styles.ContainerHarga}>
          {ListHarga.map((v, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.ContainerButtonHarga,
                  {
                    borderTopStartRadius: moderateScale(6),
                    borderTopEndRadius: moderateScale(6),
                    borderBottomStartRadius: moderateScale(6),
                    borderBottomEndRadius: moderateScale(6),
                    backgroundColor: pres === i ? '#F3FFFB' : 'white',
                    borderColor: pres === i ? '#263765' : 'white',
                    borderWidth: pres === i ? moderateScale(2) : null,
                  },
                ]}>
                <View>
                  <TouchableOpacity onPress={() => setPres(i)}>
                    <View style={styles.NummberButton}>
                      <Text style={styles.TextNumber}>{v.harga}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('DetailPaymentElectricity')
            }
            style={styles.ContainerButtonConfirm}>
            <View style={styles.ButtonConfirm}>
              <Text style={styles.TextButtonConfirm}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPaymentElectricity;
