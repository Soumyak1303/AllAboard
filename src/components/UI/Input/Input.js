import React from "react";
import "./Input.css";

const input = (props) => {
  const inputClasses = ["InputElement"];
  // if (props.shouldValidate && props.touched && props.invalid) {
  //   inputClasses.push("Invalid");
  // }

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
        onChange={props.onChange}
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
