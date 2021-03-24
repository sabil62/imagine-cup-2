const initialState = {
  change: 0,
  another: "fdsaaf",
};

const select_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        change: state.change + action.thisVeryValueName,
        another: "sab",
      };
      break;

    default:
      return state;
      break;
  }
};

export default select_reducer;
