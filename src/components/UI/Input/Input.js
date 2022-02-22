import React from "react";
import "./Input.css";

const input = (props) => {
  const inputChangeHandler = (event) => {
    props.onChangeHandler({
      value:
        props.elementType === "checkbox"
          ? event.target.checked
          : event.target.value,
      key: props.elementId,
    });
  };
  const inputClasses = ["InputElement"];

  return (
    <div className={`form-field ${props.elementType}`}>
      {props.elementType !== "checkbox" && (
        <label
          className="Label"
          dangerouslySetInnerHTML={{ __html: props.label }}
        />
      )}
      <input
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={(event) => inputChangeHandler(event)}
      />
      {props.elementType === "checkbox" && (
        <label
          className="Label"
          dangerouslySetInnerHTML={{ __html: props.label }}
        />
      )}
    </div>
  );
};

export default input;
