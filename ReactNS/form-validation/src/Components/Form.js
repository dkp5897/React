import React, { useEffect, useState } from "react";
import {
  alphaNumericValidation,
  emailValidation,
  passwordValidation,
  phoneValidation,
} from "./Validation";
import './Form.css'



function Form() {
  const [getForm, setForm] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm: "",
  });

  const [formValidation, setFormValidation] = useState({
    fullname: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirm: false,
  });

  const [getConfirmed, setConfirmed] = useState(true);
  const [getGlobal,setGlobal] = useState(false)

  const onChangeHandler = (event) => {
    setForm({
      ...getForm,
      [event.target.placeholder]: event.target.value,
    });
  };

  const formValidationCheck = () => {
    setFormValidation({
      fullname: alphaNumericValidation(getForm.fullname),
      email: emailValidation(getForm.email),
      phoneNumber: phoneValidation(getForm.phoneNumber),
      password: passwordValidation(getForm.password),
      confirm: passwordValidation(getForm.confirm),
    });
  };

  useEffect(() => {
    formValidationCheck();
  }, [getForm]);

  const onSubmit = (event) => {
    event.preventDefault();
    setGlobal(true)
    console.log(getForm);
    if (
      getForm.password !== "" &&
      getForm.confirm !== "" &&
      getForm.password === getForm.confirm
    ) {
      setConfirmed(false);
    }
  };

  return (
    <div className="container">
      {getGlobal && getConfirmed && <div className="danger">Password is not matching</div>}
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            value={getForm.fullname}
            type="text"
            className="form-control"
            placeholder="fullname"
            onChange={onChangeHandler}
          />
          {getGlobal && formValidation.fullname && (
            <div className="danger">
             Full Name must be alphanumeric and contain 3 - 16 characters
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            value={getForm.email}
            type="email"
            className="form-control"
            placeholder="email"
            onChange={onChangeHandler}
          />
          {getGlobal && formValidation.email && (
            <div className="danger">
              Please provide valid email
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            value={getForm.phoneNumber}
            type="number"
            className="form-control"
            placeholder="phoneNumber"
            onChange={onChangeHandler}
          />
          {getGlobal && formValidation.phoneNumber && (
            <div className="danger">
              Please provide valid phoneNumber
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            value={getForm.password}
            type="password"
            className="form-control"
            placeholder="password"
            onChange={onChangeHandler}
          />
          {getGlobal && formValidation.password && (
            <div className="danger">
            Password must be alphanumeric(@,_and - are also allowed) and between 6-20 characters
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Confirme Password</label>
          <input
            value={getForm.confirm}
            type="password"
            className="form-control"
            placeholder="confirm"
            onChange={onChangeHandler}
          />
          {getGlobal && formValidation.confirm && (
            <div className="danger">
            Password must be alphanumeric(@,_and - are also allowed) and between 6-20 characters
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
