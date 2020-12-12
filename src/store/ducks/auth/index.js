import { AuthTypes } from "./types";
import initialState from "../initialState";

const INITIAL_STATE = initialState.auth;

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGNIN:
      const signedUser = state.usersList.find(
        (user) => action.payload.email === user.email
      );
      return { ...state, currentUser: signedUser, isLogged: true };
    case AuthTypes.SIGNUP:
      return { ...state, usersList: [...state.usersList, action.payload] };
    case AuthTypes.LOGOUT:
      return { ...state, isLogged: false, currentUser: {} };
    default:
      return state;
  }
};

export default authReducer;
