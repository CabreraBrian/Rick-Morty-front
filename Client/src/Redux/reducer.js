import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_ALLFAVORITES } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return { 
        ...state, 
        myFavorites: payload, 
        allCharactersFav: payload 
      };

    case REMOVE_FAV:
      return { 
        ...state, 
        myFavorites: payload,
        allCharactersFav: payload
      };

    case GET_ALLFAVORITES:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload,
      }

    case FILTER:
      const allCharacctersFiltered = state.allCharactersFav.filter( character => character.gender === payload);
      return {
        ...state,
        myFavorites: payload === "allCharacters" ? [...state.allCharactersFav] : allCharacctersFiltered,
      };

    case ORDER:
      const myFavoritesCopy = [...state.myFavorites];
      return {
        ...state,
        myFavorites:
          payload === "A" ? myFavoritesCopy.sort((a, b) => a.id - b.id) : myFavoritesCopy.sort((a, b) => b.id - a.id)
      };

    default:
      return { ...state };
  }
};

export default reducer;
