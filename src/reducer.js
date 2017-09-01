import { combineReducers } from 'redux';
import appshell from './components/AppShell/reducer';
import inventory from './scenes/Inventory/reducer';

const rootReducer = combineReducers({ appshell, inventory });

export default rootReducer;
