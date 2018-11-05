import {combineReducers} from 'redux'
import centers from './centers.js'
import animals from './animals.js'
import singleAnimal from './singleAnimal'

const rootReducer = combineReducers({
  centers,
  animals,
  singleAnimal
});

export default rootReducer;

