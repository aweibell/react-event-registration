import firebase from 'firebase';
import Rebase from 're-base';

// TODO: Move apiKey to environment variable using process.env
const config = {
  apiKey: "AIzaSyBwBT4-fDAzPAJjvbbVPv4OaqqFu-RHdRE",
  authDomain: "joinin-react.firebaseapp.com",
  databaseURL: "https://joinin-react.firebaseio.com",
};
//the root app just in case we need it
const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(config);

export const auth = firebaseApp.auth(); //the firebase auth namespace

export default base;
