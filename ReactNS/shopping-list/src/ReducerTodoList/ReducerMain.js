import React, { useReducer } from "react";
import { Form } from "react-router-dom";
import Input from "./Input";
import List from "./List";
import { Reducer, initialState } from "./Reducer";

function ReducerMain() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const changeHandler = (event) => {
    dispatch({ type: "change", event: event });
    console.log(event.target.value);
  };

  const addTask = () => {
    dispatch({ type: "addition" });
    // console.log('clicked');
  };

  const deleteItem = (index) => {
    dispatch({ type: "delete", index: index });
  };

  const editItem = (index) => {
    dispatch({ type: "setEdit", index: index });
    console.log(index);
  };

  const editSubmit = () => {
    dispatch({ type: "editSubmit" });
    console.log("index");
  };

  return (
    <div>
      <Input
        inputData={state.getText}
        dispatch={dispatch}
        changeHandler={changeHandler}
        addTask={addTask}
        setEdit={state.setEdit}
        // editItem={editItem}/
        editSubmit={editSubmit}
      />
      <List list={state.dataList} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default ReducerMain;
