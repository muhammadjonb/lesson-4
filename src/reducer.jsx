const reducer = (action, state) => {
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  }

  if (action.type === "inc") {
    let citem = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: citem };
  }

  return state;
};

export default reducer;
