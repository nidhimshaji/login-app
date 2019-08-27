import React from 'react';
import { connect } from 'react-redux';
import './LoginStyle.scss';
import { login } from '../redux-actions/actions';
// import Dashboard from './Dashboard';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
      this.setState({ submitted: true, username: '', password: '' });
    }
  };

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div id="login">
        <h2>Login</h2>
        <div className="logintemplate">
          <form name="form" onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <br />
            {submitted && (!username && <div>Username is required</div>)}
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <br />
            {/* {submitted && (!password && <div>Password is required</div>)} */}
            <br />
            <button>Login</button>

            {this.props.success ? <div>success</div> : <div>Login Failure</div>}
            {/* <Link to="/register" className="btn btn-link">Register</Link> */}
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('mapState', state);
  return {
    success: state.login.success,
  };
}

function mapDispatchToProps() {
  return {
    login: login,
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(LoginPage);
