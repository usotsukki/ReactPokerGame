import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import gameReducer from "./reducers";

const rootReducer = combineReducers({
	game: gameReducer,
});

// using applyMiddleware for async fetching
export const store = createStore(rootReducer, applyMiddleware(thunk));
