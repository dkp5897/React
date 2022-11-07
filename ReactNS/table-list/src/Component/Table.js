import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [getList, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      axios
        .get("http://localhost:3000/product")
        .then((response) => {
          console.log(response.data);
          setList([...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  };

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {getList.map((obj, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{obj.title}</td>
                <td>{obj.amount}</td>
                <td>{obj.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
