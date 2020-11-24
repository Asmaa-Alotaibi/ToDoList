import React from "react";

import { observer } from "mobx-react";

const TaskItem = ({ item, itemId }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
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
