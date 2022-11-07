import React, { useState } from "react";
import axios from "axios"

function Form() {
  const [getForm, setForm] = useState({
    title: "",
    amount: 0,
    duration: 0,
  });

  const changeHandler = (event) => {
    // setForm(
    //     {   title:event.target.value,
    //         amount:event.target.value,
    //         duration:event.target.value
    //     }
    // );

    setForm({
        ...getForm,[event.target.placeholder]:event.target.value
    })
  };

//   console.log(getForm);

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/product',getForm).then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    })

  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="email"
            className="form-control"
            placeholder="title"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            className="form-control"
            placeholder="amount"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            className="form-control"
            placeholder="duration"
            onChange={changeHandler}
          />
        </div>
        <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
