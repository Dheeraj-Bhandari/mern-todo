import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
const TodoForm = () => {
  const [task, settask] = useState("");
  const [type, settype] = useState("");
  // console.log(type)
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (type === "") {
      alert("Please select Type");
      return;
    }
    dispatch(addNewTodo({ task: task, type: type }));
    settask("");
    settype("");
  };

  return (
    <div>
      <form action="" className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => settask(e.target.value)}
          placeholder="Enter New Todo"
          name=""
          id=""
        />
        <select
          name=""
          id=""
          value={type}
          onChange={(e) => settype(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="personal">personal</option>
          <option value="official">official</option>
          <option value="family">family</option>
        </select>
      </form>
    </div>
  );
};

export default TodoForm;
