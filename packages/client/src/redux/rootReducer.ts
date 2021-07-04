import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";

import { authReducer } from "./Auth/auth.reducers";

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "profile"],
};

const rootReducer = (history) =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    router: connectRouter(history),
  });

export default rootReducer;
