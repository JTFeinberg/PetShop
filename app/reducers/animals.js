import axios from 'axios';

// ACTION TYPES
const GET_ANIMALS = 'GET_ANIMALS';

// ACTION CREATORS
export const getAnimals = allAnimals => ({ type: GET_ANIMALS, payload: allAnimals });

// THUNK CREATORS
export const fetchAnimalsThunk = () => dispatch => {
  return axios
  .get(`/api/allAnimals`)
    .then(res => res.data)
    .then(allAnimals => {
      dispatch(getAnimals(allAnimals));
    });
};


// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GET_ANIMALS:
      return action.payload;
    default:
      return state;
  }
}
