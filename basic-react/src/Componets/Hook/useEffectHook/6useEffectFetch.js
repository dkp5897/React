import React, { useEffect, useState } from "react";
import axios from "axios";
function UseEffectFetch() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      <ul>{getData.map((data, index) => 
        <li key={data.id}>{data.title}</li>
      )}</ul>
    </div>
  );
}

export default UseEffectFetch;
