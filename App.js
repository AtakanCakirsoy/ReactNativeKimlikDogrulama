import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';

class Main extends Component {
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBKcpxaLx0_cE7EkMNHOkbHIpmO8qmlP5U',
      authDomain: 'reactnativekimlikdogrulama.firebaseapp.com',
      databaseURL: 'https://reactnativekimlikdogrulama.firebaseio.com',
      projectId: 'reactnativekimlikdogrulama',
      storageBucket: '',
      messagingSenderId: '383383050066',
      appId: '1:383383050066:web:bd6ac40983c73d6a'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Giriş Ekranı" />
        <Text style={{ marginTop: 5 }}>Kimlik Doğrulama uygulaması Login Sayfası</Text>
      </View>
    );
  }
}
export default Main;