import { takeLatest, put, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserDoc,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  SignInSucess,
  SignInFailure,
  SignOutFailure,
  SignOutSucess,
} from "./user-action";

export function* Google() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserDoc, user);
    const userSnap = yield userRef.get();
    yield put(SignInSucess({ id: userSnap.id, ...userSnap.data() }));
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* GoogleSignInStart() {
  yield takeLatest("Google_SignIn_Start", Google);
}

export function* Email({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserDoc, user);

    const userSnap = yield userRef.get();
    yield put(SignInSucess({ id: userSnap.id, ...userSnap.data() }));
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* EmailSignInStart() {
  yield takeLatest("Email_SignIn_Start", Email);
}

export function* Session() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserDoc, userAuth);
    const userSnap = yield userRef.get();
    yield put(SignInSucess({ id: userSnap.id, ...userSnap.data() }));
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* CheckUserSession() {
  yield takeLatest("Check_User_Session", Session);
}

export function* SignOut() {
  try {
    yield auth.signOut();
    yield put(SignOutSucess());
  } catch (error) {
    yield put(SignOutFailure(error.message));
  }
}

export function* SignOutStart() {
  yield takeLatest("SignOut_Start", SignOut);
}
