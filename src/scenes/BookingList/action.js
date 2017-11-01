export const FETCH_PENDING_BOOKING = 'INVENTORY/FETCH_PENDING_BOOKING';
export const FETCH_PENDING_BOOKING_SUCCESSFUL = 'INVENTORY/FETCH_PENDING_BOOKING_SUCCESSFUL';
export const FETCH_PENDING_BOOKING_FAILED = 'INVENTORY/FETCH_PENDING_BOOKING_FAILED';
export const CHANGE_BOOKING_STATUS = 'INVENTORY/CHANGE_BOOKING_STATUS';
export const CHANGE_BOOKING_STATUS_SUCCESSFUL = 'INVENTORY/CHANGE_BOOKING_STATUS_SUCCESSFUL';
export const CHANGE_BOOKING_STATUS_FAILED = 'INVENTORY/CHANGE_BOOKING_STATUS_FAILED';

export const fetchPendingBooking = () => ({
  type: FETCH_PENDING_BOOKING,
});

export const fetchPendingBookingSuccessful = response => ({
  type: FETCH_PENDING_BOOKING_SUCCESSFUL,
  payload: response,
});

export const fetchPendingBookingFailed = () => ({
  type: FETCH_PENDING_BOOKING_FAILED,
});

export const changeBookingStatus = () => ({
  type: CHANGE_BOOKING_STATUS,
});

export const changeBookingStatusSuccessful = () => ({
  type: CHANGE_BOOKING_STATUS_SUCCESSFUL,
});

export const changeBookingStatusFailed = () => ({
  type: CHANGE_BOOKING_STATUS_FAILED,
});
