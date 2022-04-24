import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import App from './App';
import Amplify from "aws-amplify";
import config from "./config";
import * as serviceWorker from './serviceWorker';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.region,
      userPoolId: config.cognito.userPoolId,
      userPoolWebClientId: config.cognito.userPoolWebClientId
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
