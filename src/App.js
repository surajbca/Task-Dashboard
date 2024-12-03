import React, { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import ConfirmModal from "./components/ConfirmModal";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const openModal = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const confirmDeleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    closeModal();
  };

  const filteredTasks = tasks.filter((task) => {
    const currentDate = new Date();
    if (filter === "completed") return task.completed;
    if (filter === "pending")
      return !task.completed && new Date(task.dueDate) >= currentDate;
    if (filter === "overdue")
      return !task.completed && new Date(task.dueDate) < currentDate;
    return true;
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Task Management Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FilterBar setFilter={setFilter} />
        </Grid>
        <Grid item xs={12}>
          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        </Grid>
        <Grid item xs={12}>
          <TaskList
            tasks={filteredTasks}
            toggleCompleted={toggleCompleted}
            openModal={openModal}
            setEditingTask={setEditingTask}
          />
        </Grid>
      </Grid>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDeleteTask}
        message="Are you sure you want to delete this task?"
      />
    </Container>
  );
};

export default App;
