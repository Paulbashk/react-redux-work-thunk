import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cashReducer from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers({
  bank: cashReducer,
  customers: customerReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
