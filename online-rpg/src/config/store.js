import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import playerReducer from '../features/player/reducer';
import mapReducer from '../features/map/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
