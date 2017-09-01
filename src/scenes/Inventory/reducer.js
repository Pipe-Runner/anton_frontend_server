import { FETCH_INVENTORY, FETCH_INVENTORY_SUCCESSFUL, FETCH_INVENTORY_FAILED } from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      return { ...state, fetchingData: true };

    case FETCH_INVENTORY_SUCCESSFUL:
      return { ...state, fetchingData: false, inventoryTableData: action.payload.tableData };

    case FETCH_INVENTORY_FAILED:
      return { ...state, fetchingData: false };

    default:
      return { ...state };
  }
};

export default reducer;
