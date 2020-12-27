import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReduer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReduer;
