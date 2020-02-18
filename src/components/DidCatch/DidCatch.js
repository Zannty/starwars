import React from "react";
import "./DidCatch.css";
import ErrorLoad from "../ErrorLoad/ErrorLoad";

class DidCatch extends React.Component {
  state = { lifecycleError: false };
  componentDidCatch() {
    this.setState({ lifecycleError: true });
  }
  render() {
    if (this.state.lifecycleError) {
      return <ErrorLoad />;
    }
    return this.props.children;
  }
}

export default DidCatch;
