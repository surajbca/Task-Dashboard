import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const TaskList = ({ tasks, toggleCompleted, openModal, setEditingTask }) => {
  return (
    <Box>
      {tasks.length === 0 && <Typography>No tasks to show</Typography>}
      {tasks.map((task) => (
        <Card key={task.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>{task.description}</Typography>
            <Typography color="text.secondary">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant={task.completed ? "outlined" : "contained"}
                color={task.completed ? "success" : "primary"}
                onClick={() => toggleCompleted(task.id)}
              >
                {task.completed ? "Mark as Pending" : "Mark as Completed"}
              </Button>
              <Button variant="outlined" onClick={() => setEditingTask(task)}>
                Edit
              </Button>
              <Button variant="contained" color="error" onClick={() => openModal(task.id)}>
                Delete
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TaskList;
