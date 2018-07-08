import Name from '../components/Name';
import { setName } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);