import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// import rootSaga from "./rootSaga";
import rootReducer from './rootReducer';
import { ApiService } from '../services/api.service';

const initialState: any = {};
const sagaMiddleware = createSagaMiddleware({
  context: { api: ApiService.Instance },
});
const history = createBrowserHistory();

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export { store, persistor, history };
