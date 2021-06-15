import thunk, { ThunkDispatch } from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import demonReducer from "./redux/reducer";
import { ReducerState, ReducerAction } from "./redux/types";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware<ThunkDispatch<ReducerState, {}, ReducerAction>>(thunk)
);

const store = createStore(demonReducer, undefined, enhancer);

export default store;
