import Name from '../components/Name';
import { setName, postName, changeState, noChangeState } from '../actions';
import { connect } from 'react-redux';
import store from '../store';

import React from 'react';

class Applicant extends React.Component {
  componentDidMount() {
    if (store.getState().name) {
      this.props.history.push('/user');
    }
  }

  componentDidUpdate() {
    if (this.props.changeState) {
      this.props.history.push('/user');
      store.dispatch(noChangeState());
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    postName();
    //history.push('/user');
  }

  render() {
    let { name, setName, postName, history } = this.props;
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
      <Name 
      name={name}
      setName={setName} 
      postName={postName}
      history={history}/>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  changeState: state.changeState
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
)(Applicant);