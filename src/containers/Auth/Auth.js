import React, { Component } from "react";
import "./Auth.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../../components/UI/Footer/Footer";
import { connect } from "react-redux";
import onAuth from "../../store/actions/authActions";
import signUpView from "../../Resources/views/signUpView";
import ElementRenderer from "../Layout/ElementRenderer";
import signInView from "../../Resources/views/signInView";

class Auth extends Component {
  state = {
    isSignUp: true,
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth({
      email: this.props.userData.email,
      password: this.props.userData.password,
      userName: this.props.userData.userName,
      isSignUp: this.state.isSignUp,
    });
  };

  onSwitchAuthModeHandler = () => {
    this.setState((prevState) => {
      return {
        isSignUp: !prevState.isSignUp,
      };
    });
  };

  render() {
    const view = this.state.isSignUp ? signUpView : signInView;
    const elements = <ElementRenderer elements={view} />;
    return (
      <div className="main-container">
        <section className="auth-sidebar">
          <Sidebar />
        </section>
        <section className="auth-content">
          <Navbar
            onSwitchAuthModeHandler={this.onSwitchAuthModeHandler}
            isSignUp={this.state.isSignUp}
          />
          <div className="main">
            <div className="auth-content">
              <h2 className="formHead">
                Connect your <br /> Google account
              </h2>
              <div className="form">
                <form onSubmit={this.submitHandler}>
                  {elements}
                  <Button btnType="Success">SUBMIT</Button>
                </form>
                <Footer />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.layout.userData,
  };
};

export default connect(mapStateToProps, { onAuth })(Auth);
