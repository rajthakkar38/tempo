import { takeLatest, put, call } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";

import { FetchCollectionSucess, FetchCollectionFailure } from "./shop.actions";

export function* fetchCollectionsStartAsync() {
  yield console.log("Fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(FetchCollectionSucess(collectionsMap));
  } catch (error) {
    yield put(FetchCollectionFailure(error.message));
  }
}

export function* FetchCollectionStart() {
  yield takeLatest("Fetch_Collection_Start", fetchCollectionsStartAsync);
}
