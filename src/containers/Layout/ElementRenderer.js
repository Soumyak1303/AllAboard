import Input from "../../components/UI/Input/Input";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import InlineCombiner from "../../components/UI/Inlinecombiner/InlineCombiner";
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { changeValue } from "../../store/actions/layoutActions";

class ElementRenderer extends Component {
  render() {
    const { elements } = this.props;
    const elementsArray = Object.keys(elements).map((key) => {
      const elementProps = elements[key];
      let element;
      switch (elementProps.elementType) {
        case "inlineCombiner":
          element = (
            <InlineCombiner elementId={key} elementProps={elementProps} />
          );
          break;
        case "wrapper":
          element = <Wrapper elementId={key} elementProps={elementProps} />;
          break;
        default:
          element = (
            <Input
              elementId={key}
              elementType={elementProps.elementType}
              elementConfig={elementProps.elementConfig}
              value={this.props.userData[key]}
              label={elementProps.label}
              onChangeHandler={this.props.changeValue}
            />
          );
      }
      return element;
    });
    return <Fragment>{elementsArray}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.layout.userData,
  };
};

export default connect(mapStateToProps, { changeValue })(ElementRenderer);
