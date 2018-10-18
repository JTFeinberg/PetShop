import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  {AllCenters, LandingPage} from './components';

const Routes = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path="/Locations" component={AllCenters} />
    </Switch>
)

export default Routes;
