import Name from '../components/Name';
import { setName, postName } from '../actions';
import { connect } from 'react-redux';
import store from '../store';

const mapStateToProps = state => ({
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  postName: () => {
    const name = store.getState().name;
    dispatch(postName(name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);