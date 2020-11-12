import * as React from 'react';
import { Image, Button, Text, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Login from './src/scenes/Login';

export default function App() {

  return(
    <Login/>
  );
}
