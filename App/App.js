
//dependencies
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
//react native components
import { Text, View } from 'react-native';
//react-navigation router
import RootNavigator from './components/rootNavigator/rootNavigator';
//import all reducers as one(because we are combining them in the file)
import appReducer from './reducers/index';

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

//export App component binding it with the store and the app navigator
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App;
