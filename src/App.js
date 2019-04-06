import React, { Component } from 'react';
import GifBrowser from './modules/gif-browser/container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <GifBrowser />
      </MuiThemeProvider>
    );
  }
}

export default App;
