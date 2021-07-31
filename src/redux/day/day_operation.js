import axios from 'axios';
import {
  dayInfoRequest,
  dayInfoSuccess,
  dayInfoError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
} from './day_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

// Операция получения информации по определённому дню
export const getDay = (id, date) => async dispatch => {
  const info = { id, date };
  console.log('day payload', id, date);
  dispatch(dayInfoRequest());

  try {
    const response = await axios.post('​/day​/info', info);
    dispatch(dayInfoSuccess(response));
  } catch (error) {
    dispatch(dayInfoError(error.message));
  }
};

export const addContact = (date, productId, weight) => async dispatch => {
  const product = { date, productId, weight };
  dispatch(addProductRequest());

  try {
    const response = await axios.post('/day', product);
    dispatch(addProductSuccess(response));
  } catch (error) {
    dispatch(addProductError(error.message));
  }
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteProductRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteProductSuccess(contactId)))
    .catch(error => dispatch(deleteProductError(error.message)));
};
