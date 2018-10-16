import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AllCenters from './components/AllCenters';

const Routes = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage}/>
        <Route exact path="/centers" component={AllCenters} />
    </Switch>
)

export default Routes;
