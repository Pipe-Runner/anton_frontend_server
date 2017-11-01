import Inventory from './Inventory';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchInventory,
  fetchInventorySuccessful,
  fetchInventoryFailed,
  addPartsToBill,
  addPartsToBillSuccessful,
  addPartsToBillFailed,
  searchParts,
  searchPartsSuccessful,
  searchPartsFailed,
} from './action';
import { openSnackBar } from '../../components/AppShell/action';
import { fetchInventoryApi, addPartsToBillApi, searchPartsApi } from './api.Inventory';

const mapStateToProps = state => ({
  ...state.inventory,
  employeeId: state.appshell.employeeId,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchInventory: () => {
    dispatch(fetchInventory());
    fetchInventoryApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('Fetch Operation Successful'));
          dispatch(fetchInventorySuccessful(data.parts));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchInventoryFailed());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(openSnackBar('Problem in Fetch Operation!'));
      });
  },
  dispatchAddPartsToBill: (employeeId, cart, customerEmailId, customerContactNumber, reset) => {
    const data = { employeeId, cart, customerEmailId, customerContactNumber };
    console.log(data);
    dispatch(addPartsToBill());
    addPartsToBillApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('Transaction Successful!'));
          reset();
          dispatch(addPartsToBillSuccessful());
          dispatch(fetchInventorySuccessful(data.parts));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(addPartsToBillFailed());
        }
      })
      .catch(error => {
        console.log('Error in fetch operation');
      });
  },
  dispatchSeachParts: (fuelType, manufacturer) => {
    // search for parts
  },
  dispatchCartFullError: () => {
    dispatch(openSnackBar('Cart Full'));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inventory));
