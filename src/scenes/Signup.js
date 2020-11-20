// const react = require("react");

// import React, { Component } from 'react';
// import { Image, Button, Text, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
// import { CognitoUserPool } from 'amazon-cognito-identity-js';
// import Constants from 'expo-constants';
// import { Auth } from 'aws-amplify';

// import colors from '../styles/colors';


// function Signup (props) {
//     return (
//         <SafeAreaView>
//             <Image source={require('../assets/images/logo.png')} style={styles.logo} />
//             <Text style={styles.logoText}>
//                 Lets Find &#8226; Lets Talk &#8226; Lets Meet
//             </Text>
//             <View style={styles.loginSection}>
//                 <TextInput
//                 style={styles.loginInput}
//                 selectionColor='white'
//                 textContentType="username"
//                 placeholder="Username/ Phone number/ Email" 
//                 placeholderTextColor="grey"
//                 value={email}
//                 onChange={event=>setEmail(event.target.value)}
//                 />
//                 <TextInput
//                 color="white"
//                 style={styles.loginInput}
//                 selectionColor='white'
//                 secureTextEntry="true"
//                 textContentType="password"
//                 placeholder="Password"
//                 placeholderTextColor="grey"
//                 value={password}
//                 onChange={event=>setPassword(event.target.value)}
//                 />
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: colors.primary,
//       flex: 1,
//       paddingTop: Constants.statusBarHeight,
//       padding: 8,
//     },
//     logo: {
//       marginTop: 100,
//       height: 100,
//       width: 100,
//       alignSelf: 'center',
//     },
//     logoText: {
//       marginTop: 10,
//       color: colors.logoText,
//       alignSelf: 'center',
//       fontSize: 16,
//     },
//     loginSection: {
//       marginTop: 80,
//     },
//     loginText: {
//       color: colors.displayText,
//       textAlign: 'center',
//     },
//     loginInput: {
//       height: 50,
//       padding: 8,
//       color: colors.inputText,
//       margin: 10,
//       fontSize: 16,
//       backgroundColor: colors.inputBackground,
//       borderRadius: 20,
//     },
//     loginButton: {
//       padding: 8,
//       fontWeight: 'bold',
//     },
// });

// export default Signup;