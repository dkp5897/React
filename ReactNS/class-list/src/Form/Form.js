import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form-main">
        <form>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.props.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Product Ammount</label>
            <input
              type="text"
              className="form-control"
              name="amount"
              onChange={this.props.changeHandler}
            />
          </div>

          <button
            onClick={this.props.submitHandler}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
