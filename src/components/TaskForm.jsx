import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const TaskForm = ({ addTask, updateTask, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      updateTask({ ...editingTask, title, description, dueDate });
    } else {
      addTask({ title, description, dueDate });
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setEditingTask(null);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <TextField
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        multiline
        rows={3}
      />
      <TextField
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        InputLabelProps={{ shrink: true }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </Button>
        {editingTask && (
          <Button variant="outlined" onClick={resetForm}>
            Cancel
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TaskForm;
