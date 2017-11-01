export const ADD_ITEM = 'ADDITEMS/ADD_ITEM';
export const ADD_ITEM_SUCCESSFUL = 'ADDITEMS/ADD_ITEM_SUCCESSFUL';
export const ADD_ITEM_FAILED = 'ADDITEMS/ADD_ITEM_FAILED';
export const ADD_SUPPLIER = 'ADDITEMS/ADD_SUPPLIER';
export const ADD_SUPPLIER_SUCCESSFUL = 'ADDITEMS/ADD_SUPPLIER_SUCCESSFUL';
export const ADD_SUPPLIER_FAILED = 'ADDITEMS/ADD_SUPPLIER_FAILED';
export const FETCH_SUPPLIER_LIST = 'ADDITEMS/FETCH_SUPPLIER_LIST';
export const FETCH_SUPPLIER_LIST_SUCCESSFUL = 'ADDITEMS/FETCH_SUPPLIER_LIST_SUCCESSFUL';
export const FETCH_SUPPLIER_LIST_FAILED = 'ADDITEMS/FETCH_SUPPLIER_LIST_FAILED';

export const addItem = () => ({
  type: ADD_ITEM,
});

export const addItemSuccessful = () => ({
  type: ADD_ITEM_SUCCESSFUL,
});

export const addItemFailed = () => ({
  type: ADD_ITEM_FAILED,
});

export const addSupplier = () => ({
  type: ADD_SUPPLIER,
});

export const addSupplierSuccessful = response => ({
  type: ADD_SUPPLIER_SUCCESSFUL,
});

export const addSupplierFailed = () => ({
  type: ADD_SUPPLIER_FAILED,
});

export const fetchSupplierList = () => ({
  type: FETCH_SUPPLIER_LIST,
});

export const fetchSupplierListSuccessful = response => ({
  type: FETCH_SUPPLIER_LIST_SUCCESSFUL,
  payload: response,
});

export const fetchSupplierListFailed = response => ({
  type: FETCH_SUPPLIER_LIST_FAILED,
});
