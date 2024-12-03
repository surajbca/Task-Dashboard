import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>{message || "Are you sure you want to proceed?"}</DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} color="error">
          Yes
        </Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
