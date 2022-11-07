import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchingSingleDaa() {
  const [Data, setData] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick,setIdFromBtnClick] = useState(1)

  const clickHandler = ()=>{
    setIdFromBtnClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromBtnClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder='id'/>
      <button onClick={clickHandler}>Fetch Data</button>
      <div>{Data.title}</div>
    </div>
  );
}

export default FetchingSingleDaa;
