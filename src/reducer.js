import { combineReducers } from 'redux';
import appshell from './components/AppShell/reducer';
import inventory from './scenes/Inventory/reducer';
// import home from './scenes/reducer';
import history from './scenes/History/reducer';
import transaction from './scenes/Transaction/reducer';
import booking from './scenes/Booking/reducer';
// import invoice from './scenes/reducer';
// import employee from './scenes/reducer';
// import salary from './scenes/reducer';

const rootReducer = combineReducers({
  appshell: appshell,
  inventory: inventory,
  history: history,
  transaction: transaction,
  booking: booking,
});

export default rootReducer;
