import react from "react";
import { useState } from "react";
import Modal from "react-modal";
import TodoStore from "../../stores/TodoStore";

const TasksModal = ({ isOpen, closeModal }) => {
  const [item, setItem] = useState({
    id: "",
    name: "",
    done: false,
    priority: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    TodoStore["createTask"](item);
    closeModal();
  };
  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="task Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> Name </label>
            <input
              value={item.name}
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label> priority </label>
            <input
              value={item.priority}
              name="priority"
              type="text"
              onChange={handleChange}
              min="1"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label> Description </label>
          <input
            value={item.description}
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit">create</button>
      </form>
    </Modal>
  );
};

export default TasksModal;
