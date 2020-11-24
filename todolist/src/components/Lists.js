import React from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import TaskItem from "./TaskItem";

const Lists = () => {
  const todayList = todoStore.todayList.map((item) => (
    <TaskItem item={item} key={item.id} />
  ));

  return (
    <div>
      <p> </p>
      <div className="container px-lg-5">
        <div className="row">
          <div className="col py-3 px-lg-5 border bg-light ">{todayList}</div>
          <div />
        </div>
      </div>
    </div>
  );
};
export default observer(Lists);
