import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {LandingPage, AllCenters} from './components';

const Routes = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path="/centers" component={AllCenters} />
    </Switch>
)

export default Routes;
