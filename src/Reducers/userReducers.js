const initialState = {};

const userReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_USER": {
      return actions.payload;
    }
    default: {
      return state;
    }
  }
};

export default userReducers;