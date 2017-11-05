import {
  FETCH_PENDING_BOOKING,
  FETCH_PENDING_BOOKING_SUCCESSFUL,
  FETCH_PENDING_BOOKING_FAILED,
  CHANGE_BOOKING_STATUS,
  CHANGE_BOOKING_STATUS_SUCCESSFUL,
  CHANGE_BOOKING_STATUS_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PENDING_BOOKING:
      return {
        ...state,
        fetchingData: true,
      };

    case FETCH_PENDING_BOOKING_SUCCESSFUL:
      return {
        ...state,
        fetchingData: false,
        bookingTableData: action.payload,
      };

    case FETCH_PENDING_BOOKING_FAILED:
      return {
        ...state,
        fetchingData: false,
      };

    case CHANGE_BOOKING_STATUS:
      return {
        ...state,
        changingBookingStatus: true,
      };

    case CHANGE_BOOKING_STATUS_SUCCESSFUL:
      return {
        ...state,
        changingBookingStatus: false,
      };

    case CHANGE_BOOKING_STATUS_FAILED:
      return {
        ...state,
        changingBookingStatus: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
