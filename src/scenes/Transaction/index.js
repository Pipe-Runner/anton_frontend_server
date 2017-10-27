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
          console.log('successful Data Fetch');
          console.log(data.parts);
          dispatch(fetchTransactionSuccessful(data.transaction));
        } else {
          console.log(data.error);
          dispatch(fetchTransactionFailed());
        }
      });
  },
  dispatchSeachTransaction: (fuelType, manufacturer) => {
    // search for parts
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Transaction));
