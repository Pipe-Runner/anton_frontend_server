import Add from './Add';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchSupplierList,
  fetchSupplierListSuccessful,
  fetchSupplierListFailed,
  addItem,
  adduccessful,
  addItemFailed,
  addSupplier,
  addSupplierSuccessful,
  addSupplierFailed,
} from './action';
import { openSnackBar } from '../../components/AppShell/action';
import { addItemApi, addSupplierApi, fetchSupplierListApi } from './api.Add';

const mapStateToProps = state => ({
  ...state.add,
  userId: state.appshell.userId,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchSuppliers: () => {},
  dispatchAddItem: data => {},
  dispatchAddSupplier: data => {},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
