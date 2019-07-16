import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import LoginForm from './src/LoginForm'

import CardSection from './components/CardSection';
import Spinner from './components/Spinner';
import Button from './components/Button';

class Main extends Component {
  state = { loggedIn: null }; //daha önceden giriş yapmışmı kullanıcı yapmamışmı bunu belirlemek için. Oturum açık kalması gibi
  //componentWillMount'un içine aldık çünkü ilk çalıştığında bu bilgilerin kontrol edilmesini istiyoruz.
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA3x65haGj9_a0LN-ujthRuxTSYxRtYnzE',
      authDomain: 'scitech-a8f1c.firebaseapp.com',
      databaseURL: 'https://scitech-a8f1c.firebaseio.com',
      projectId: 'scitech-a8f1c',
      storageBucket: 'scitech-a8f1c.appspot.com',
      messagingSenderId: '1088829867500'
    });

    firebase.auth().onAuthStateChanged((user) => { //daha önceden giriş yapmışmı kullanıcı yapmamışmı bunu belirlemek için.Oturum açık kalması gibi
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}>Çıkış</Button>
          </CardSection>
        );
      case false:
        return (
          <LoginForm />
        );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Giriş Ekranı" />
        {this.renderContent()}
      </View>
    );
  }
}
export default Main;