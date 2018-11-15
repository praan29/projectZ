import React, {Component} from 'react';

import firebase from 'firebase';

const fireConfig = {
	apiKey: "AIzaSyCFvSis1YpHp-pl84G6hcrXNubORXoXrc0",
    authDomain: "projectz-33768.firebaseapp.com",
   	databaseURL: "https://projectz-33768.firebaseio.com",
    projectId: "projectz-33768",
    storageBucket: "projectz-33768.appspot.com",
    messagingSenderId: "878300631832"
}

const fire =  firebase.initializeApp(fireConfig);

export default fire;
