import RootNavigator from '../components/rootNavigator/rootNavigator';

const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('products'));

const navReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  //if nextState is null then return the original state
  return nextState || state;
}

export default navReducer;
