import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';

import Home from './components/Home';

function App() {
	AOS.init();
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
