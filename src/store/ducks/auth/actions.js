import { AuthTypes } from "./types";

export const signIn = (user) => ({
  type: AuthTypes.SIGNIN,
  payload: user
});

export const signUp = (user) => ({
  type: AuthTypes.SIGNUP,
  payload: user
});

export const logOut = () => ({
  type: AuthTypes.LOGOUT
});
