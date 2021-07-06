import { takeLatest, put, call } from "redux-saga/effects";
import { clearCart } from "./cart-action";

export function* Clear() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest("Clear_Cart", Clear);
}
