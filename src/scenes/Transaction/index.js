import Transaction from './Transaction';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchTransaction,
  fetchTransactionSuccessful,
  fetchTransactionFailed,
  searchTransaction,
  searchTransactionSuccessful,
  searchTransactionFailed,
} from './action';
import { openSnackBar } from '../../components/AppShell/action';
import { fetchTransactionApi, searchTransactionApi } from './api.Transaction';

const mapStateToProps = state => ({
  ...state.transaction,
});

const mapDispatchToProps = dispatch => ({
  dispatchTransactionInventory: () => {
    dispatch(fetchTransaction());
    fetchTransactionApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('successful Data Fetch!'));
          dispatch(fetchTransactionSuccessful(data.transaction));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchTransactionFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(fetchTransactionFailed());
      });
  },
  dispatchSeachTransaction: (fuelType, manufacturer) => {
    // search for parts
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Transaction));
