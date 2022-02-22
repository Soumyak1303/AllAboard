import ElementRenderer from "../../../containers/Layout/ElementRenderer";
import "./InlineCombiner.css";

const InlineCombiner = (props) => {
  const elements = <ElementRenderer elements={props.elementProps.children}/>
  return <div className={`form-field-group ${props.elementId}`}>{elements}</div>;
};

export default InlineCombiner;
