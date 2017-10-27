import History from './History';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchHistory,
  fetchHistorySuccessful,
  fetchHistoryFailed,
  searchHistory,
  searchHistorySuccessful,
  searchHistoryFailed,
} from './action';
import { fetchHistoryApi, searchHistoryApi } from './api.History';

const mapStateToProps = state => ({
  ...state.history,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchHistory: () => {
    dispatch(fetchHistory());
    fetchHistoryApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          console.log('successful Data Fetch');
          console.log(data.history);
          dispatch(fetchHistorySuccessful(data.history));
        } else {
          console.log(data.error);
          dispatch(fetchHistoryFailed());
        }
      })
      .catch(error => {
        console.log('Error in fetch operation');
        dispatch(fetchHistoryFailed());
      });
  },
  dispatchSeachParts: (fuelType, manufacturer) => {
    // search for parts
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(History));
