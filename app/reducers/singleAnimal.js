import axios from 'axios';

// ACTION TYPES
const GET_ANIMAL = 'GET_ANIMAL';

// ACTION CREATORS
export const getSingleAnimal = animal => ({ type: GET_ANIMAL, payload: animal });

// THUNK CREATORS
export const fetchSingleAnimal = animalId => dispatch => {
  return axios
  .get(`/api/allAnimals/${animalId}`)
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
