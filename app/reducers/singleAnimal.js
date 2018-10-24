import axios from 'axios';

// ACTION TYPES
const GET_ANIMAL = 'GET_ANIMAL';

// ACTION CREATORS
export const getSingleAnimal = animal => ({ type: GET_ANIMAL, payload: animal });

// THUNK CREATORS
export const fetchSingleAnimalThunk = animalData => dispatch => {
  /*
  If user gets to the single animal page through clicking then it's unecessary and slow to go to the database
  since data has already been loaded via the animals reducer. If the user gets to the page via an exact url then fetch data from
  db and load to state
  */
  return animalData.id
  ? dispatch(getSingleAnimal(animalData)) 
  : axios
  .get(`/api/allAnimals/${animalData}`)
    .then(res => res.data)
    .then(animal => {
      dispatch(getSingleAnimal(animal));
    });
};

// REDUCER
export default function (state = {}, action) {
  switch (action.type) {
    case GET_ANIMAL:
      return action.payload;
    default:
      return state;
  }
}
