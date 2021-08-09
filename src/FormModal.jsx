import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AskQuestionForm from "./AskQuestionForm";
import CancelPopup from "./CancelPopup";

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const [openCancel, setOpenCancel] = React.useState(false);
  const [cancel, setCancel] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
    setOpenCancel(false);
  };

  const handleClose = () => {
    setOpenCancel(true);
    setCancel(true);
  };

  const handleClickOpenCancel = () => {
    setOpenCancel(false);
    setCancel(true);
  };

  const handleCloseCancel = () => {
    setOpenCancel(false);
    setCancel(false);
  };

  useEffect(() => {
    if (openCancel === false && cancel === false) {
      setOpen(false);
    }
  }, [openCancel, setOpen, cancel]);

  console.log(openCancel);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Form</DialogTitle>
        <DialogContent>
          <AskQuestionForm  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <CancelPopup
            openCancel={openCancel}
            setOpenCancel={setOpenCancel}
            handleCloseCancel={handleCloseCancel}
            handleClickOpenCancel={handleClickOpenCancel}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
