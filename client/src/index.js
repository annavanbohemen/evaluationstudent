import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';

//styling
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightBold": 700 
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
     
     document.getElementById('root')
)