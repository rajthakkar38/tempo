const Initial_State = {
  currentUser: null,
  errorMsg: undefined,
};

const userRedux = (state = Initial_State, action) => {
  switch (action.type) {
    case "SignIn_Success":
      return {
        ...state,
        currentUser: action.payload,
        errorMsg: null,
      };
    case "SignOut_Sucess":
      return {
        ...state,
        currentUser: null,
        errorMsg: null,
      };
    case "SignOut_Failure":
    case "SignIn_Failure":
      return {
        ...state,
        currentUser: action.payload,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default userRedux;
