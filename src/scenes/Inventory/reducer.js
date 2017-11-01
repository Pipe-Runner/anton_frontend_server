import {
  FETCH_INVENTORY,
  FETCH_INVENTORY_SUCCESSFUL,
  FETCH_INVENTORY_FAILED,
  ADD_PARTS_TO_BILL,
  ADD_PARTS_TO_BILL_SUCCESSFUL,
  ADD_PARTS_TO_BILL_FAILED,
  SEARCH_PARTS,
  SEARCH_PARTS_SUCCESSFUL,
  SEARCH_PARTS_FAILED,
  FETCH_SOLD_COUNT,
  FETCH_SOLD_COUNT_SUCCESSFUL,
  FETCH_SOLD_COUNT_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      return { ...state, fetchingData: true };

    case FETCH_INVENTORY_SUCCESSFUL:
      return { ...state, fetchingData: false, inventoryTableData: action.payload };

    case FETCH_INVENTORY_FAILED:
      return { ...state, fetchingData: false };

    case ADD_PARTS_TO_BILL:
      return { ...state, addingPartsToBill: true };

    case ADD_PARTS_TO_BILL_SUCCESSFUL:
      return { ...state, addingPartsToBill: false, inventoryTableData: action.payload };

    case ADD_PARTS_TO_BILL_FAILED:
      return { ...state, addingPartsToBill: false };

    case SEARCH_PARTS:
      return { ...state, searchingParts: true };

    case SEARCH_PARTS_SUCCESSFUL:
      return { ...state, searchingParts: false, inventoryTableData: action.payload };

    case SEARCH_PARTS_FAILED:
      return { ...state, searchingParts: false };

    case FETCH_SOLD_COUNT:
      return {
        ...state,
        fetchingSoldCount: true,
      };

    case FETCH_SOLD_COUNT_SUCCESSFUL:
      return {
        ...state,
        fetchingSoldCount: false,
        transactionCount: action.payload.transactionCount,
        partCount: action.payload.partCount,
        bookingCount: action.payload.bookingCount,
      };

    case FETCH_SOLD_COUNT_FAILED:
      return {
        ...state,
        fetchingSoldCount: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;
