import { SET_FILTER } from "../actions";

const reducer = (state = "ALL", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default reducer;
