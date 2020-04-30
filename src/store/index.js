import { createStore, applyMiddleware, compose } from "redux";
import createSaga from "redux-saga";
import logger from "redux-logger";
import reducer from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSaga();

export const initializeStore = (initialState = {}) => {
  const reduxDevToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle
  const composeEnhancers = reduxDevToolsCompose || compose;
  const enhancer = composeEnhancers(applyMiddleware(logger, sagaMiddleware));
  let store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(saga);
  return store;
};
