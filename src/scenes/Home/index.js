import Home from './Home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBooking, getBookingSuccessful, getBookingFailed } from '../Booking/action';
import { openSnackBar } from '../../components/AppShell/action';
import { getBookingsApi } from '../Booking/api.Booking';

const mapStateToProps = state => ({
  emailId: state.appshell.emailId,
  userLevel: state.appshell.userLevel,
  contactNumber: state.appshell.contactNumber,
  userId: state.appshell.userId,
  bookingData: state.booking.bookingData,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetBooking: userId => {
    dispatch(getBooking());
    const data = { userId };
    getBookingsApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(getBookingSuccessful(data.booking));
        } else {
          console.log(data.error);
          dispatch(getBookingFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation!'));
        dispatch(getBookingFailed());
      });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
