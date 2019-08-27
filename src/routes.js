import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/frontend/landing.jsx';
import Affiliations from './components/sysadmin/affiliations.jsx';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/affiliations' component={Affiliations}/>
    </Switch>
)
