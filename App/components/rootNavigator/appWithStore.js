import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
//navigator component
import RootNavigator from './rootNavigator';
//import all reducers as one(because we are combining them in the file)
import appReducer from '../../reducers';

//app with navigation included
class AppWithNavigation extends Component {
  render() {
    return (
      <RootNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
          })
        }
      />
    );
  }
}

//map needed props in component
const mapStateToProps = (state) => ({
  nav: state.nav
});

//connect the props with the App component
const AppWithNavigationState = connect(mapStateToProps)(AppWithNavigation);

//create the store, passing the reducers that out app is going to use
const store = createStore(appReducer);

export default class AppWithStore extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
