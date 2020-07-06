const initialState = {
  pizzas: [],
};

function pizzasReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA':
      return { ...state, pizzas: [1] };

    default:
      return state;
  }
}

export default pizzasReducer;
