import React, { Component } from "react";
import './Table.css'
class Table extends Component {
    constructor(props) {
      super(props)
      console.log(this.props.list)

    }
    
  render() {
    return (
      <div className="table-main">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((data,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.amount}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
