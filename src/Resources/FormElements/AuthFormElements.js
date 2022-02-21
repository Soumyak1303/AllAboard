const AuthFormElements = () => {
  const elements = {
    user: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "name",
        },
        label: "Name",
        value: "",
        validations: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      userName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Username",
        },
        value: "",
        label: "Username",
        validations: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    credentials: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your email Id",
        },
        value: "",
        label: "Email",
        validations: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        label: "Password",
        validations: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
      agreement: {
        elementType: "checkbox",
        elementConfig: {
          type: "checkbox",
        },
        value: "",
        label: `
        Creating an account means you’re okay with our
        <a target="_blank" href="/terms">Terms of Service</a>,
        <a target="_blank" href="/privacy">Privacy Policy</a>, and our default
        <a target="_blank" href="/notifications">Notification Settings</a>.`,
        validations: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    }
  };

  return elements;
};

export default AuthFormElements;
