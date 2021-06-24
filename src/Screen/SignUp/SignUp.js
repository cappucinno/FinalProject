import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from 'react-native';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';

export default class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity>
          <View>
            <Text>Already have an account ? Sign In</Text>
          </View>
        </TouchableOpacity>
        <TextInput placeholder="Firstname" placeholderTextColor="#EFBF7F" />
        <TextInput placeholder="Lastname" placeholderTextColor="#EFBF7F" />
        <TextInput placeholder="Email" placeholderTextColor="#EFBF7F" />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#EFBF7F"
          secureTextEntry
        />

        <View style={styles.centerPos}>
          <TouchableOpacity>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
