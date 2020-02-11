import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './components/home'
import Step1 from './components/step1'
import Step2 from './components/step2'

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Step1} path='/step1' />
        <Route component={Step2} path='/step2' />
    </Switch>
)