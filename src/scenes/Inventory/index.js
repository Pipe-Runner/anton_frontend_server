import Inventory from './Inventory';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInventory, fetchInventorySuccessful, fetchInventoryFailed } from './action';

const mapStateToProps = state => ({
  ...state.inventory,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchInventory: filterData => {
    dispatch(fetchInventory());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inventory));
