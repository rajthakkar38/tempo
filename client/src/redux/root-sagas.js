import { FetchCollectionStart } from "./shop/shop.sagas";
import { all, call } from "redux-saga/effects";
import {
  GoogleSignInStart,
  EmailSignInStart,
  CheckUserSession,
  SignOutStart,
} from "./user/user.sagas";
import { onSignOutSuccess } from "./cart/cart.sagas";

export function* RootSaga() {
  yield all([
    call(FetchCollectionStart),
    call(GoogleSignInStart),
    call(EmailSignInStart),
    call(CheckUserSession),
    call(SignOutStart),
    call(onSignOutSuccess),
  ]);
}
