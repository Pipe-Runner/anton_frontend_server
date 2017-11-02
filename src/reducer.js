import { combineReducers } from 'redux';
import appshell from './components/AppShell/reducer';
import inventory from './scenes/Inventory/reducer';
import history from './scenes/History/reducer';
import transaction from './scenes/Transaction/reducer';
import booking from './scenes/Booking/reducer';
import bookingList from './scenes/BookingList/reducer';
import add from './scenes/Add/reducer';
import user from './scenes/User/reducer';

const rootReducer = combineReducers({
  appshell: appshell,
  inventory: inventory,
  history: history,
  transaction: transaction,
  booking: booking,
  bookingList: bookingList,
  add: add,
  user: user,
});

export default rootReducer;
