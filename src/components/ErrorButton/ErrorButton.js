import React from "react";
import "./ErrorButton.css";

class ErrorButton extends React.Component {
  state = {
    error: false
  };
  render() {
    if (this.state.error) {
      this.s.s = 0;
    }

    return (
      <button
        className="error-button btn-danger btn-e"
        onClick={() => this.setState({ error: true })}
      >
        ThrowError
      </button>
    );
  }
}

export default ErrorButton;
