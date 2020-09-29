import React, { Component } from 'react';
import './App.css';
import Login from './Login'
// import firebase from 'firebase'
import { secrets } from './secrets.json'

var firebase = require('firebase');
var firebaseui = require('firebaseui');

firebase.initializeApp(secrets)

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      isSignedIn: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((currentUser) => {
      console.log('currentUser', currentUser)
      if(currentUser) {
        console.log('currentUser', currentUser)
        this.setState({
          isSignedIn: !this.state.isSignedIn,
          currentUser: { name: currentUser.displayName, img: currentUser.photoURL },
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Login uiConfig={uiConfig} firebase={firebase.auth()}/>
        </header>
      </div>
    );
  }
}

export default App;
