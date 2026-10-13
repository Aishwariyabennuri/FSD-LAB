import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [type, setType] = useState("Assignment");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (task === "" || date === "") {
      alert("Please enter task and date");
      return;
    }
    const newTask = {
      task: task,
      type: type,
      date: date,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setDate("");
  };
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed =
      !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h1>Student Task Management System</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Assignment</option>
          <option>Exam</option>
          <option>Study</option>
          <option>Deadline</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTask}>
          Add Task
        </button>
      </div>
      <h2>My Tasks</h2>
      {tasks.map((item, index) => (
        <div className="task" key={index}>
          <span className={item.completed ? "completed" : ""}>
            {item.task}
          </span>
          <span>{item.type}</span>
          <span>{item.date}</span>
          <button onClick={() => completeTask(index)}>
            {item.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>);
}
export default App;