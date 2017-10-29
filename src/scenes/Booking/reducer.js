import {
  RESET_ISVERIFIED,
  VERIFY_DATA,
  VERIFY_DATA_SUCCESSFUL,
  VERIFY_DATA_FAILED,
  SUBMIT_DATA,
  SUBMIT_DATA_SUCCESSFUL,
  SUBMIT_DATA_FAILED,
  GET_BOOKINGS,
  GET_BOOKINGS_SUCCESSFUL,
  GET_BOOKINGS_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_ISVERIFIED:
      return { ...state, isVerified: false };
    case VERIFY_DATA:
      return { ...state, verfifyingData: true };

    case VERIFY_DATA_SUCCESSFUL:
      return { ...state, verfifyingData: false, isVerified: action.payload };

    case VERIFY_DATA_FAILED:
      return { ...state, verfifyingData: false };

    case SUBMIT_DATA:
      return { ...state, submittingData: true };

    case SUBMIT_DATA_SUCCESSFUL:
      return { ...state, submittingData: false };

    case SUBMIT_DATA_FAILED:
      return { ...state, submittingData: false };

    case GET_BOOKINGS:
      return { ...state, getBooking: true };

    case GET_BOOKINGS_SUCCESSFUL:
      return { ...state, getBooking: false, bookingData: action.payload };

    case GET_BOOKINGS_FAILED:
      return { ...state, getBooking: false };

    default:
      return { ...state };
  }
};

export default reducer;
