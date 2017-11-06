import { connect } from 'react-redux';
import Booking from './Booking';
import { withRouter } from 'react-router-dom';
import {
  resetIsverified,
  verifyData,
  verifyDataSuccessful,
  verifyDataFailed,
  submitData,
  submitDataSuccessful,
  submitDataFailed,
} from './action';
import { openSnackBar } from '../../components/AppShell/action';
import { verifybookingdata1Api, submitBookingDataApi } from './api.Booking';
import { fetchVehicleListApi } from '../Add/api.Add.js';
import {
  fetchVehicleList,
  fetchVehicleListSuccessful,
  fetchVehicleListFailed,
} from '../Add/action';

const mapStateToProps = state => ({
  ...state.booking,
  userId: state.appshell.userId,
  emailId: state.appshell.emailId,
  contactNumber: state.appshell.contactNumber,
  vehicleList: state.add.vehicleList,
});

const mapDispatchToProps = dispatch => ({
  dispatchResetIsVerified: () => {
    dispatch(resetIsverified());
  },
  dispatchVefifyBookingData: (stage, data) => {
    dispatch(openSnackBar('Verifying time slot!'));
    dispatch(verifyData());
    switch (stage) {
      case 0:
        console.log(data);
        verifybookingdata1Api(data)
          .then(response => {
            if (response.ok === true) {
              return response.json();
            }
            throw new Error('Error in network');
          })
          .then(data => {
            console.log(data);
            if (data.code === '200' && data.error === 'none') {
              if (data.isAvailable) {
                dispatch(openSnackBar('Time Slot Available!'));
              } else {
                dispatch(openSnackBar('Time Slot Not Available!'));
              }
              dispatch(verifyDataSuccessful(data.isAvailable));
            } else {
              dispatch(openSnackBar(data.error));
              dispatch(verifyDataFailed());
            }
          })
          .catch(error => {
            console.log(error);
            dispatch(openSnackBar('Error in fetch operation!'));
            dispatch(verifyDataFailed());
          });
        break;

      default:
        break;
    }
  },
  dispatchSubmitData: (data, onFinish) => {
    dispatch(openSnackBar('Making a booking for you!'));
    submitData();
    submitBookingDataApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        console.log(data);
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('Booking Confirmed!'));
          dispatch(submitDataSuccessful());
          onFinish();
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(submitDataFailed());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(openSnackBar('Error in fetch operation!'));
        dispatch(submitDataFailed());
      });
  },
  dispatchFetchVehicleList: () => {
    dispatch(fetchVehicleList());
    fetchVehicleListApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(fetchVehicleListSuccessful(data.vehicle));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchVehicleListFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(fetchVehicleListFailed());
      });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));
