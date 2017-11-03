import Add from './Add';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchSupplierList,
  fetchSupplierListSuccessful,
  fetchSupplierListFailed,
  fetchVehicleList,
  fetchVehicleListSuccessful,
  fetchVehicleListFailed,
  addItem,
  addItemSuccessful,
  addItemFailed,
  addSupplier,
  addSupplierSuccessful,
  addSupplierFailed,
  addVehicle,
  addVehicleSuccessful,
  addVehicleFailed,
} from './action';
import { openSnackBar } from '../../components/AppShell/action';
import {
  addItemApi,
  addSupplierApi,
  addVehicleApi,
  fetchSupplierListApi,
  fetchVehicleListApi,
} from './api.Add';

const mapStateToProps = state => ({
  ...state.add,
  userId: state.appshell.userId,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchSupplierList: () => {
    dispatch(fetchSupplierList());
    fetchSupplierListApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(fetchSupplierListSuccessful(data.supplier));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchSupplierListFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(fetchSupplierListFailed());
      });
  },
  dispatchFetchVehicleList: () => {
    dispatch(fetchVehicleList());
    fetchVehicleListApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(fetchVehicleListSuccessful(data.vehicle));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchVehicleListFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(fetchVehicleListFailed());
      });
  },
  dispatchAddItem: data => {
    dispatch(addItem());
    addItemApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(addItemSuccessful());
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(addItemFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(addItemFailed());
      });
  },
  dispatchAddSupplier: data => {
    dispatch(addSupplier());
    addSupplierApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(addSupplierSuccessful(data.supplier));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(addSupplierFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(addSupplierFailed());
      });
  },
  dispatchAddVehicle: data => {
    dispatch(addVehicle());
    addVehicleApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(addVehicleSuccessful(data.vehicle));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(addVehicleFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(addVehicleFailed());
      });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
