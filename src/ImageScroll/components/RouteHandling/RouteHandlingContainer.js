import { withRouter } from 'react-router-dom';
import RouteHandling from './RouteHandling';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ...state.app
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    null
  )(RouteHandling)
);
