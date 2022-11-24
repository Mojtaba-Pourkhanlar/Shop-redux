const stateReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let tempStateAdd = state.filter((item) => item.id === action.payload.id);
      if (tempStateAdd < 1) {
        return [...state, action.payload];
      } else {
        alert("Available in the shopping cart 😒", "error");
        return state;
      }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "INCREASE":
      let stateTempInc = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return stateTempInc;
    case "DECREASE":
      let stateTempDec = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return stateTempDec;
    default:
      return state;
  }
};

export default stateReducer;
