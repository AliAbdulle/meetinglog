import React, { Component } from "react";
// form error that output to each page
class FormError extends Component {
  render() {
    const { theMessage } = this.props;
    return ( <div className="col-12  alart alart-da nger px-2">
        {theMessage}
    </div>
    )
  }
}
export default FormError;
