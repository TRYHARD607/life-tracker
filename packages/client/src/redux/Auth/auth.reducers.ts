import { createReducer } from "typesafe-actions";

export interface User {
  _id: string;
  email: string;
  token: string;
  firstname: string;
  lastname: string;
}

export type AuthState = {
  user: User | null;
  isPending: boolean;
};

const initialState: AuthState = {
  user: null,
  isPending: false,
};

export const authReducer = createReducer<AuthState>(initialState, {});
