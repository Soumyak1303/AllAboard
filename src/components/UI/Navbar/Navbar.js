import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav class="auth-nav">
      <p class="auth-link auth-register-container">
        {props.isSignUp ? "Already a member?" : "Not a member?"}
        <button onClick={props.onSwitchAuthModeHandler} class="form-btn">
          {props.isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </nav>
  );
};

export default Navbar;
