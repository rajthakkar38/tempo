export const GoogleSignInStart = () => ({
  type: "Google_SignIn_Start",
});

export const EmailSignInStart = (emailAndPassword) => ({
  type: "Email_SignIn_Start",
  payload: emailAndPassword,
});

export const SignInSucess = (user) => ({
  type: "SignIn_Success",
  payload: user,
});

export const SignInFailure = (err) => ({
  type: "SignIn_Failure",
  payload: err,
});

export const CheckUserSession = () => ({
  type: "Check_User_Session",
});

export const SignOutStart = () => ({
  type: "SignOut_Start",
});

export const SignOutSucess = () => ({
  type: "SignOut_Sucess",
});

export const SignOutFailure = (err) => ({
  type: "SignOut_Failure",
  payload: err,
});
