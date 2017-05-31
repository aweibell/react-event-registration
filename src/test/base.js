

import Rebase from 're-base';

// TODO: Move apiKey to environment variable using process.env
const base = Rebase.createClass({
  apiKey: "AIzaSyBwBT4-fDAzPAJjvbbVPv4OaqqFu-RHdRE",
  authDomain: "joinin-react.firebaseapp.com",
  databaseURL: "https://joinin-react.firebaseio.com",
});

export default base;

