import userRedux from "./user/user-redux";
import { combineReducers } from "redux";
import cartRedux from "./cart/cart-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryRedux from "./directory/directory-reducer";
import shopReducer from "./shop/shop-reducer";

const config = {
  key: "root",
  storage,
  whitelist: ["cart", "section", "shopdata"],
};

const rootReducer = combineReducers({
  user: userRedux,
  cart: cartRedux,
  section: directoryRedux,
  shop: shopReducer,
});

export default persistReducer(config, rootReducer);
