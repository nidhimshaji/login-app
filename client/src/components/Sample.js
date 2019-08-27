import React, {Component} from 'react';
import './SampleStyles.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../redux-actions/actions';

class Login extends Component {
  constructor (props) {
    super (props);

    this.props.fetchSample ();
  }

  render () {
    return (
      <div id="sample">
        <div className="template">
          {this.props.sample}
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({sample}) {
  return {
    sample: sample.sentence,
  };
}

function mapDispatchToProps () {
  return {
    fetchSample: actions.fetchSample,
  };
}

export default connect (mapStateToProps, mapDispatchToProps ()) (Login);
