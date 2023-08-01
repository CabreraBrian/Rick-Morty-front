import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALLFAVORITES} from "./action-types";

export const getAllFav = () => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.get(endpoint)
        return dispatch({
          type: GET_ALLFAVORITES,
          payload: data,
        })
    }
  } catch (error) {
    console.log(error.message);
  }
}

export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character)
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
    };
  } catch (error) {
    console.log(error.message);
  };
};

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint)
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
    };
  } catch (error) {
    console.log(error.message);
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
