import {
  ADD_ITEM,
  ADD_ITEM_SUCCESSFUL,
  ADD_ITEM_FAILED,
  ADD_SUPPLIER,
  ADD_SUPPLIER_SUCCESSFUL,
  ADD_SUPPLIER_FAILED,
  ADD_VEHICLE,
  ADD_VEHICLE_SUCCESSFUL,
  ADD_VEHICLE_FAILED,
  FETCH_SUPPLIER_LIST,
  FETCH_SUPPLIER_LIST_SUCCESSFUL,
  FETCH_SUPPLIER_LIST_FAILED,
  FETCH_VEHICLE_LIST,
  FETCH_VEHICLE_LIST_SUCCESSFUL,
  FETCH_VEHICLE_LIST_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        addingItem: true,
      };

    case ADD_ITEM_SUCCESSFUL:
      return {
        ...state,
        addingItem: false,
      };

    case ADD_ITEM_FAILED:
      return {
        ...state,
        addingItem: false,
      };

    case ADD_SUPPLIER:
      return {
        ...state,
        addingSupplier: true,
      };

    case ADD_SUPPLIER_SUCCESSFUL:
      return {
        ...state,
        addingSupplier: false,
        supplierList: action.payload,
      };

    case ADD_SUPPLIER_FAILED:
      return {
        ...state,
        addingSupplier: false,
      };

    case ADD_VEHICLE:
      return {
        ...state,
        addingVehicle: true,
      };

    case ADD_VEHICLE_SUCCESSFUL:
      return {
        ...state,
        addingVehicle: false,
        vehicleList: action.payload,
      };

    case ADD_VEHICLE_FAILED:
      return {
        ...state,
        addingVehicle: false,
      };

    case FETCH_SUPPLIER_LIST:
      return {
        ...state,
        fetchingSupplierList: true,
      };

    case FETCH_SUPPLIER_LIST_SUCCESSFUL:
      return {
        ...state,
        fetchingSupplierList: false,
        supplierList: action.payload,
      };

    case FETCH_SUPPLIER_LIST_FAILED:
      return {
        ...state,
        fetchingSupplierList: false,
      };

    case FETCH_VEHICLE_LIST:
      return {
        ...state,
        fetchingVehicleList: true,
      };

    case FETCH_VEHICLE_LIST_SUCCESSFUL:
      return {
        ...state,
        fetchingVehicleList: false,
        vehicleList: action.payload,
      };

    case FETCH_VEHICLE_LIST_FAILED:
      return {
        ...state,
        fetchingVehicleList: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
