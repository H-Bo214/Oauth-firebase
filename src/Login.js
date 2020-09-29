import React from 'react'
import {uiConfig} from './App';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

let firebase = require('firebase');

function  Login(props) {
  return (
    <section>
      <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={firebase.auth()} />
    </section>
  )
}

export default Login