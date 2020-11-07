import * as React from 'react';
import { Image, Button, Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.logoText}>
        Lets Find &#8226; Lets Talk &#8226; Lets Meet
      </Text>
      <View style={styles.loginSection}>
        <TextInput
          style={styles.loginInput}
          selectionColor='white'
          textContentType="username"
          placeholder="Username/ Phone number/ Email" 
          placeholderTextColor="grey"
        />
        <TextInput
          color="white"
          style={styles.loginInput}
          selectionColor='white'
          secureTextEntry="true"
          textContentType="password"
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <Button style={styles.loginButton} color="pink" title="Sign in" />
        <Text style={styles.loginText}>Don't have an account?</Text>
        <Button style={styles.loginButton} color="pink" title="Sign up" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  logo: {
    marginTop: 100,
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  logoText: {
    marginTop: 10,
    color: 'pink',
    alignSelf: 'center',
    fontSize: 16,
  },
  loginSection: {
    marginTop: 80,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
  },
  loginInput: {
    height: 50,
    padding: 8,
    color: 'white',
    margin: 10,
    fontSize: 16,
    backgroundColor: '#326da8',
    textAlign: 'bottom',
    borderRadius: 20,
  },
  loginButton: {
    padding: 8,
    fontWeight: 'bold',
  },
});
