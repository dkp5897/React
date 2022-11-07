import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    IncrementCounert = () => {
      this.setState((preState) => {
        return { count: preState.count + incrementNumber };
      });
    };

    render() {
        console.log(this.props.name);
        return (
        <OriginalComponent
          count={this.state.count}
          IncrementCounert={this.IncrementCounert}
          {...this.props}  // passing rest of the props to components
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
