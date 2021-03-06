import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

/////---------------------- Common Reducer --------------------------------//////////


//---------------------------------- Platform Reducers--------------------------------------//

//----------- Middleware Import ------------//
import { augmentorMiddleware } from "./storeMiddleware";

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(
  applyMiddleware(augmentorMiddleware(), ReduxThunk)
)(createStore);

/*
  TO DO - Move Uneccessary or small reducers to app
*/

const rootReducer = combineReducers({

});

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
