import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AOS from 'aos';

import Home from './components/Home';
import Layout from './components/Layout';

function App() {
    AOS.init();
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;
