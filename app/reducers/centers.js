import axios from 'axios';

// ACTION TYPES
const GET_CENTERS = 'GET_CENTERS';

// ACTION CREATORS
export const getCenters = centers => ({ type: GET_CENTERS, payload: centers });

// THUNK CREATORS
export const fetchCentersThunk = () => dispatch => {
  return axios
  .get(`/api/centers`)
    .then(res => res.data)
    .then(centers => {
      dispatch(getCenters(centers));
    });
};


// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case GET_CENTERS:
      return action.payload;
    default:
      return state;
  }
}