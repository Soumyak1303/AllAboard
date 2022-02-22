const elements = {
  userDetails: {
    elementType: "inlineCombiner",
    children: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "name",
        },
        label: "Name",
        value: "",
        children: null,
      },
      userName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Username",
        },
        value: "",
        label: "Username",
        children: null,
      },
    },
  },
  credentials: {
    elementType: "wrapper",
    children: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter your email Id",
        },
        value: "",
        label: "Email",
        children: null,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        label: "Password",
        children: null,
      },
    },
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
    children: null,
  },
};

export default elements;
