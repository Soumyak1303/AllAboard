import ElementRenderer from "../../../containers/Layout/ElementRenderer";
import "./Wrapper.css";
import { Fragment } from "react";

const Wrapper = (props) => {
  const elements = <ElementRenderer elements={props.elementProps.children} />;
  return <Fragment>{elements}</Fragment>;
};

export default Wrapper;
