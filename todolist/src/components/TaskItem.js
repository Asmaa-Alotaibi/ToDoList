import React from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";
import { BsX } from "react-icons/bs";

const TaskItem = ({ item }) => {
  const handelclick = (event) => {
    item.done = !item.done;
    todoStore.updateTask(item);
  };

  const handelDelete = (event) => {
    event.preventDefault();
    item.done = !item.done; //here
    todoStore.deleteitem(item.id);
  };

  return (
    <div>
      <BsX className="float-right" size="2em" onClick={handelDelete} />
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              checked={item.done}
              aria-label="Checkbox for following text input"
              onClick={handelclick}
            />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder={item.name}
        />
      </div>

      <p>{item.description}</p>
    </div>
  );
};

export default observer(TaskItem);
