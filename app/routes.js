import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  {AllCenters, LandingPage, AllAnimals} from './components';

const Routes = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path="/Locations" component={AllCenters} />
        <Route exact path="/All Adoptions" component={AllAnimals} />
    </Switch>
)

export default Routes;
