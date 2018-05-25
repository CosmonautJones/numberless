import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';

import Pledge from './components/pledge';
import Landing from './components/landing';
import ThankYou from './components/thankyou';
import Voting from './components/voting';
import Info from './components/info';

import { Login, NewUser } from './components';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

ReactDOM.render(
	<StripeProvider apiKey={ STRIPE_KEY }>
		<Router>
			<div>
				<Route exact path="/pledge" component={Pledge}/>
				<Route exact path="/" component={Landing}/>
				<Route exact path="/landing" component={Landing}/>
				<Route exact path="/thankyou" component={ThankYou}/>
				<Route exact path="/voting" component={Voting}/>
				<Route exact path="/newuser" component={NewUser}/>
				<Route exact path="/login" component={Login}/>
			</div>
		</Router>
	</StripeProvider>, 

	document.getElementById('root'));
registerServiceWorker();
