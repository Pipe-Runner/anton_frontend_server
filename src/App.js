import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { Provider } from 'react-redux';
import AppShell from './components/AppShell';
import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Inventory from './scenes/Inventory';
import Transaction from './scenes/Transaction';
import Employee from './scenes/Employee';
import Salary from './scenes/Salary';
import History from './scenes/History';
import Modal from './components/Modal';
import { theme, muiTheme } from './utils/theme';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ThemeProvider theme={theme}>
        <div>
          <Switch>
            <Route exact path="/" render={() => <AppShell><Home /></AppShell>} />
            <Route path="/inventory" render={() => <AppShell><Inventory /></AppShell>} />
            <Route path="/transaction" render={() => <AppShell><Transaction /></AppShell>} />
            <Route path="/employee" render={() => <AppShell><Employee /></AppShell>} />
            <Route path="/salary" render={() => <AppShell><Salary /></AppShell>} />
            <Route path="/history" render={() => <AppShell><History /></AppShell>} />
          </Switch>
          <Modal />
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  </Provider>
);

export default App;
