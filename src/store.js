// import create store and apply middleware.
import { createStore, applyMiddleware } from "redux";
// import root reducer.
import reducer from "./reducers";
// import thunk.
// import thunk from "redux-thunk";
// import redux saga.
import createSagaMiddleware from "redux-saga";
// import root saga.
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// export default createStore(reducer, applyMiddleware(thunk));

export default store;
