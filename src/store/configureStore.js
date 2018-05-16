import { createStore, combineReducers, applyMiddleware } from 'redux';
import modal from '../reducers/modal';
import reduxThunk from 'redux-thunk';


export default () => {
  const store = createStore(
    combineReducers({
        modal
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    , applyMiddleware(reduxThunk)
  );
  return store;
};

