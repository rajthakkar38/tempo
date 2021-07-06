export const toggleCart = () => ({
  type: "Toggle_Cart",
});

export const addItem = (item) => ({
  type: "Add_Item",
  payload: item,
});

export const ReduceItem = (item) => ({
  type: "Reduce_Item",
  payload: item,
});

export const RemoveItem = (item) => ({
  type: "Remove_Item",
  payload: item,
});

export const clearCart = () => ({
  type: "Clear_Cart",
});
