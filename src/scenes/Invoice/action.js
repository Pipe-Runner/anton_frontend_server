export const FETCH_INVENTORY = 'INVENTORY/FETCH_INVENTORY';
export const FETCH_INVENTORY_SUCCESSFUL = 'INVENTORY/FETCH_INVENTORY_SUCCESSFUL';
export const FETCH_INVENTORY_FAILED = 'INVENTORY/FETCH_INVENTORY_FAILED';
export const ADD_PARTS_TO_BILL = 'INVENTORY/ADD_PARTS_TO_BILL';
export const ADD_PARTS_TO_BILL_SUCCESSFUL = 'INVENTORY/ADD_PARTS_TO_BILL_SUCCESSFUL';
export const ADD_PARTS_TO_BILL_FAILED = 'INVENTORY/ADD_PARTS_TO_BILL_FAILED';
export const SEARCH_PARTS = 'INVENTORY/SEARCH_PARTS';
export const SEARCH_PARTS_SUCCESSFUL = 'INVENTORY/SEARCH_PARTS_SUCCESSFUL';
export const SEARCH_PARTS_FAILED = 'INVENTORY/SEARCH_PARTS_FAILED';

export const fetchInventory = () => ({
  type: FETCH_INVENTORY,
});

export const fetchInventorySuccessful = response => ({
  type: FETCH_INVENTORY_SUCCESSFUL,
  payload: response,
});

export const fetchInventoryFailed = () => ({
  type: FETCH_INVENTORY_FAILED,
});

export const addPartsToBill = () => ({
  type: ADD_PARTS_TO_BILL,
});

export const addPartsToBillSuccessful = () => ({
  type: ADD_PARTS_TO_BILL_SUCCESSFUL,
});

export const addPartsToBillFailed = () => ({
  type: ADD_PARTS_TO_BILL_FAILED,
});

export const searchParts = () => ({
  type: SEARCH_PARTS,
});

export const searchPartsSuccessful = response => ({
  type: SEARCH_PARTS_SUCCESSFUL,
  payload: response,
});

export const searchPartsFailed = response => ({
  type: SEARCH_PARTS_FAILED,
});
