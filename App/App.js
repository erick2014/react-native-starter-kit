
//dependencies
import React, { Component } from 'react';
import AppWithStore from './reactNavigation/appWithStore';

//export App component binding it with the store and the app navigator
class App extends React.Component {
  render() {
    return (
      <AppWithStore />
    )
  }
}

export default App;
