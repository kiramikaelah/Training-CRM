import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddTraining(props) {
    const [open, setOpen] = useState (false);
    const [training, setTraining] = useState(
        {id: '', activity: '', date: '', duration: ''}
        );
   
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    };

    const addTraining = () => {
        props.saveTraining(training);
        handleClose();
    }

    return(
        <div style={{margin: 10}}>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Add new workout
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New workout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the information for new workout
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="id"
            value={training.id}
            onChange={e => handleChange(e)}
            label="Workout ID"
            fullWidth
          />
          <TextField
            margin="dense"
            name="activity"
            value={training.activity}
            onChange={e => handleChange(e)}
            label="Activity"
            fullWidth
          />
          <TextField
            margin="dense"
            name="date"
            value={training.date}
            onChange={e => handleChange(e)}
            label="Date"
            fullWidth
          />
          <TextField
            margin="dense"
            name="duration"
            value={training.duration}
            onChange={e => handleChange(e)}
            label="Duration"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button startIcon={<SaveIcon />} onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}