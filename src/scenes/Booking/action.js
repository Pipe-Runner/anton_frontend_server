export const RESET_ISVERIFIED = 'BOOKING/RESET_ISVERIFIED';
export const VERIFY_DATA = 'BOOKING/VERIFY_DATA';
export const VERIFY_DATA_SUCCESSFUL = 'BOOKING/VERIFY_DATA_SUCCESSFUL';
export const VERIFY_DATA_FAILED = 'BOOKING/VERIFY_DATA_FAILED';
export const SUBMIT_DATA = 'BOOKING/SUBMIT_DATA';
export const SUBMIT_DATA_SUCCESSFUL = 'BOOKING/SUBMIT_DATA_SUCCESSFUL';
export const SUBMIT_DATA_FAILED = 'BOOKING/SUBMIT_DATA_FAILED';
export const GET_BOOKINGS = 'BOOKING/GET_BOOKINGS';
export const GET_BOOKINGS_SUCCESSFUL = 'BOOKING/GET_BOOKINGS_SUCCESSFUL';
export const GET_BOOKINGS_FAILED = 'BOOKING/GET_BOOKINGS_FAILED';

export const resetIsverified = (title, type, actionFunction) => ({
  type: RESET_ISVERIFIED,
  payload: { title, type, actionFunction },
});

export const verifyData = () => ({
  type: VERIFY_DATA,
});

export const verifyDataSuccessful = isVerified => ({
  type: VERIFY_DATA_SUCCESSFUL,
  payload: isVerified,
});

export const verifyDataFailed = () => ({
  type: VERIFY_DATA_FAILED,
});

export const submitData = () => ({
  type: SUBMIT_DATA,
});

export const submitDataSuccessful = () => ({
  type: SUBMIT_DATA_SUCCESSFUL,
});

export const submitDataFailed = () => ({
  type: SUBMIT_DATA_FAILED,
});

export const getBooking = () => ({
  type: GET_BOOKINGS,
});

export const getBookingSuccessful = bookingData => ({
  type: GET_BOOKINGS_SUCCESSFUL,
  payload: bookingData,
});

export const getBookingFailed = () => ({
  type: GET_BOOKINGS_FAILED,
});
