import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../actions/auth";

const LoginWrapper = styled.form`
  width: 20%;
  justify-items: center;
  display: flex ;
  flex-direction: column;
  background-color: orange;
  border: 2px solid gray;

`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = (event) =>{
    event.preventDefault();

    const { email, password} = this.state;
    this.props.login(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper onSubmit={this.handleLogin}>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          required
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          required
          value={password}
        />
        <Button type="submit" >Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch (login(email, password)),
})

export default connect(null, mapDispatchToProps)(LoginPage);
