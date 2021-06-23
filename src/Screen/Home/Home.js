import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IconBPJS} from '../../Assets/Images/images';
const Home = () => {
  return (
    <View>
      <FastImage
        style={styles.apa}
        source={IconBPJS}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
