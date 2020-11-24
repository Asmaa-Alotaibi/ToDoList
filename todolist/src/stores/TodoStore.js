// import tasks from "../tasks.js";
import axios from "axios";

import { makeAutoObservable, action } from "mobx";

class TodoStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this, {
      fetchTasks: action,
    });
  }

  get todayList() {
    return this.tasks.filter((item) => !item.done);
  }
  fetchTasks = async () => {
    const response = await axios.get("http://localhost:8000/tasks");
    console.log("fetchTasks -> response", response);
    this.tasks = response.data;
  };
}
const todoStore = new TodoStore();
todoStore.fetchTasks();

export default todoStore;
