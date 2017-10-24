import Home from './Home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  username: state.appshell.username,
  adminUser: state.appshell.adminUser,
  token: state.appshell.token,
});

export default withRouter(connect(mapStateToProps, undefined)(Home));
