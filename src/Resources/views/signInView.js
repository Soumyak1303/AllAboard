const elements = {
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
};

export default elements;
