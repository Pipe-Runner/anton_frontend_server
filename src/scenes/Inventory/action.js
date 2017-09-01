export const FETCH_INVENTORY = 'INVENTORY/FETCH_INVENTORY';
export const FETCH_INVENTORY_SUCCESSFUL = 'INVENTORY/FETCH_INVENTORY_SUCCESSFUL';
export const FETCH_INVENTORY_FAILED = 'INVENTORY/FETCH_INVENTORY_FAILED';

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
