import React, { Component } from "react";
import "./Auth.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../../components/UI/Footer/Footer";
import AuthFormElements from "../../Resources/FormElements/AuthFormElements";

class Auth extends Component {
  state = {
    ...AuthFormElements(),
    isSignUp: false,
  };

  getFormElements = (elements, parent) => {
    const formElements = Object.keys(elements).map((key) => {
      const elementProps = elements[key];
      return (
        <Input
          key={key}
          elementType={elementProps.elementType}
          elementConfig={elementProps.elementConfig}
          value={elementProps.value}
          label={elementProps.label}
          invalid={!elementProps.valid}
          shouldValidate={elementProps.validations}
          touched={elementProps.touched}
          onChange={(event) => this.inputChangeHandler(event, key, parent)}
        />
      );
    });
    return formElements;
  };

  inputChangeHandler = (event, controlName, parent) => {
    const updatedControls = {
      ...this.state[parent],
      [controlName]: {
        ...this.state[parent][controlName],
        value: event.target.value,
        valid: true,
        touched: true,
      },
    };
    this.setState({ [parent]: updatedControls });
    console.log(this.state);
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert("yay!");
    // this.props.onAuth(
    //   this.state.controls.email.value,
    //   this.state.controls.password.value,
    //   this.state.isSignUp
    // );
  };

  render() {
    const userFields = this.getFormElements(this.state.user, "user");
    const credentialFields = this.getFormElements(
      this.state.credentials,
      "credentials"
    );
    return (
      <div className="main-container">
        <section className="auth-sidebar">
          <Sidebar />
        </section>
        <section className="auth-content">
          <Navbar />
          <div className="main">
            <div className="auth-content">
              <h2 className="formHead">
                Connect your <br /> Google account
              </h2>
              <div className="form">
                <form onSubmit={this.submitHandler}>
                  <div className="form-field-group">{userFields}</div>
                  {credentialFields}
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

export default Auth;
