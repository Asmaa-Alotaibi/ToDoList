import { useState } from "react";
import TasksModal from "./models/TasksModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="btn btn-outline-primary "
      >
        New Task{" "}
      </button>
      <TasksModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
