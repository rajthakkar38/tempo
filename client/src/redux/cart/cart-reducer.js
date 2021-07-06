const Initial_State = {
  hidden: true,
  cart: [],
};

const addItem = (prevcart, newcart) => {
  const exists = prevcart.find((cartItems) => cartItems.id === newcart.id);

  if (exists) {
    return prevcart.map((c) =>
      c.id === newcart.id ? { ...c, quantity: c.quantity + 1 } : c
    );
  } else {
    return [...prevcart, { ...newcart, quantity: 1 }];
  }
};

const reduceItem = (prevcart, newcart) => {
  const exists = prevcart.find((cartItems) => cartItems.id === newcart.id);

  if (exists.quantity === 1) {
    return prevcart.filter((items) => items.id !== newcart.id);
  } else {
    return prevcart.map((c) =>
      c.id === newcart.id ? { ...c, quantity: c.quantity - 1 } : c
    );
  }
};

const cartRedux = (state = Initial_State, action) => {
  switch (action.type) {
    case "Toggle_Cart":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "Add_Item":
      return {
        ...state,
        cart: addItem(state.cart, action.payload),
      };
    case "Reduce_Item":
      return {
        ...state,
        cart: reduceItem(state.cart, action.payload),
      };
    case "Remove_Item":
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cartRedux;
