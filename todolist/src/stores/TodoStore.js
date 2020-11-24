// import tasks from "../tasks.js";
import axios from "axios";

import { makeAutoObservable, action } from "mobx";

class TodoStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this, {
      fetchTasks: action,
      createTask: action,
      updateTask: action,
      deleteitem: action,
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

  createTask = async (newItem) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newItem);
      this.tasks.push(res.data);
    } catch (error) {
      console.log("TodoStore -> createTask -> error", error);
    }
  };

  updateTask = async (updatedItem) => {
    try {
      await axios.put(
        `http://localhost:8000/tasks/${updatedItem.id}`,
        updatedItem
      );
    } catch (error) {
      console.log("TodoStore -> updateTask-> error", error);
    }
  };

  deleteitem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${itemId}`);
      this.tasks = this.tasks.filter((item) => item.id !== itemId);
    } catch (error) {
      console.log("todoStore -> deleteitem -> error", error);
    }
  };
}

const todoStore = new TodoStore();
todoStore.fetchTasks();

export default todoStore;
