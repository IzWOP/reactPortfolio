import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TagManager from 'react-gtm-module';
import AOS from 'aos';
// import './utils/api-config';
import Home from './components/Home';
import Layout from './components/Layout';
//global styling
import 'aos/src/sass/aos.scss';
import './stylesheets/global.scss';

function App() {
    useEffect(() => {
        TagManager.initialize({gtmId:'GTM-5CVVQGX'})
    }, [])
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
