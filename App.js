import * as React from 'react';
import { Image, Button, Text, View, StyleSheet, TextInput } from 'react-native';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const poolData = {
    UserPoolId: 'us-east-1_riQAYckmR',
    ClientId: 't7i2mg2lp5i28nai88ldk635q',
  }

  const userPool = new CognitoUserPool(poolData);

  const onSubmit = event => {
    event.preventDefault();
    console.log('submitted..');
    userPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  }
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
          value={email}
          onChange={event=>setEmail(event.target.value)}
        />
        <TextInput
          color="white"
          style={styles.loginInput}
          selectionColor='white'
          secureTextEntry="true"
          textContentType="password"
          placeholder="Password"
          placeholderTextColor="grey"
          value={password}
          onChange={event=>setPassword(event.target.value)}
        />
        <Button style={styles.loginButton} color="pink" title="Sign in" />
        <Text style={styles.loginText}>Don't have an account?</Text>
        <Button style={styles.loginButton} color="pink" title="Sign up" onPress={onSubmit} />
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
    color: 'black',
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
