import Home from './Home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  username: state.appshell.username,
  isAdmin: state.appshell.isAdmin,
});

export default withRouter(connect(mapStateToProps, undefined)(Home));
