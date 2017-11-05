import BookingList from './BookingList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchPendingBooking,
  fetchPendingBookingSuccessful,
  fetchPendingBookingFailed,
  changeBookingStatus,
  changeBookingStatusSuccessful,
  changeBookingStatusFailed,
} from './action';
import { openSnackBar } from '../../components/AppShell/action';
import { fetchPendingBookingApi, changeBookingStatusApi } from './api.BookingList';

const mapStateToProps = state => ({
  ...state.bookingList,
  employeeId: state.appshell.employeeId,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchPendingBooking: () => {
    dispatch(fetchPendingBooking());
    fetchPendingBookingApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('Fetch Operation Successful'));
          dispatch(fetchPendingBookingSuccessful(data.booking));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchPendingBookingFailed());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(openSnackBar('Problem in Fetch Operation!'));
      });
  },
  dispatchChangeBookingStatus: data => {
    console.log(data);
    dispatch(changeBookingStatus());
    changeBookingStatusApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(fetchPendingBookingSuccessful(data.booking));
          dispatch(changeBookingStatusSuccessful());
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchPendingBookingFailed());
          dispatch(changeBookingStatusFailed());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(openSnackBar('Problem in Changing Status!'));
      });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingList));
