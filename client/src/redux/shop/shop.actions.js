import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";

export const FetchCollectionStart = () => ({
  type: "Fetch_Collection_Start",
});

export const FetchCollectionSucess = (collectionsMap) => ({
  type: "Fetch_Collection_Sucess",
  payload: collectionsMap,
});

export const FetchCollectionFailure = (err) => ({
  type: "Fetch_Collection_Failure",
  payload: err,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(FetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(FetchCollectionSucess(collectionsMap));
      })
      .catch((error) => dispatch(FetchCollectionFailure(error.message)));
  };
};
