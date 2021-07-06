const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMsg: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Fetch_Collection_Start":
      return {
        ...state,
        isFetching: true,
      };
    case "Fetch_Collection_Sucess":
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case "Fetch_Collection_Failure":
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
