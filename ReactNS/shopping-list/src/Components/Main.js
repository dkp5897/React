import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import Form from "./Form/Form";

function Main() {
  const [data, setDate] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [tableFlag, setTableFlag] = useState(false)
  const [getId, setId] = useState(-1);
  const [getEditObject, setEditObject] = useState({
    title: "",
    quantity: "",
    price: "",
  });

  // fetching data
  const fetchData = () => {
    axios
      .get("http://localhost:3000/list")
      .then((res) => {
        setDate([...res.data]);
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChangeHandler = (event) => {
    setEditObject({
      ...getEditObject,
      [event.target.name]: event.target.value,
    });
  };

  // posting data after clicking on submit btn
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/list", getEditObject)
      .then((res) => {
        // console.log(res)
        fetchData();
        setTableFlag(true)
      })
      .catch((error) => {
        console.log(error);
      });
    setEditObject({
      title: "",
      quantity: "",
      price: "",
    });
  };

  // for deleting a particular data
  const onDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:3000/list/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // for edit

  const onEditInitialHandler = (index, id) => {
    console.log(index, id);
    setEditFlag(true);
    setId(id);
    setEditObject({
      title: data[index].title,
      quantity: data[index].quantity,
      price: data[index].price,
    });
  };

  const onEditFinalSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/list/${getId}`, getEditObject)
      .then(() => {
        setEditObject({
          title: "",
          quantity: "",
          price: "",
        });
        fetchData();
        setEditFlag(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form
        title={getEditObject.title}
        quantity={getEditObject.quantity}
        price={getEditObject.price}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        onEditFinalSubmitHandler={onEditFinalSubmitHandler}
        editFlag={editFlag}
      />
      <Table
        item={data}
        tableFlag={tableFlag}
        onDeleteHandler={onDeleteHandler}
        onEditInitialHandler={onEditInitialHandler}
      />
    </div>
  );
}

export default Main;
