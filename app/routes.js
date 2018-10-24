import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  {AllCenters, LandingPage, AllAnimals, SingleAnimal} from './components';

const Routes = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path="/Locations" component={AllCenters} />
        <Route exact path="/All Adoptions" component={AllAnimals} />
        <Route exact path="/All Adoptions/:animalId" component={SingleAnimal} />
    </Switch>
)

export default Routes;
