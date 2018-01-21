import { combineReducers } from 'redux';

//import custom reducers
import navReducer from './navReducer';
import shoppingCartReducer from './shoppingCartReducer';

const appReducer = combineReducers({
  nav: navReducer,
  shoppingCart: shoppingCartReducer
});

export default appReducer;


