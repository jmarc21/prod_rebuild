import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/frontend/landing.jsx';
import Login from './components/frontend/login.jsx';
import Affiliations from './components/sysadmin/affiliations.jsx';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route path='/affiliations' component={Affiliations}/>
    </Switch>
)
