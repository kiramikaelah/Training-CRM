import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function EditCustomer(props) {
    const [open, setOpen] = useState (false);
    const [customer, setCustomer] = useState(
        {id: '', firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''}
    );

    const handleClickOpen = () => {
        console.log(props)
        setOpen(true);
        setCustomer({
            id: props.customer.id,
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city,
            email: props.customer.email,
            phone: props.customer.phone
        })
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    const handleChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value })
    };

    const editCustomer = () => {
        console.log(customer);
        props.editCustomer(customer, props.customer.links[0].href);
        handleClose();
    }

    return(
        <div style={{margin: 10}}>
      <EditIcon variant="outlined" color="secondary" onClick={handleClickOpen}>
        Edit
      </EditIcon>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit
          </DialogContentText>
          <TextField
            margin="dense"
            name="firstname"
            value={customer.firstname}
            onChange={e => handleChange(e)}
            label="First name"
            fullWidth
          />
          <TextField
            margin="dense"
            name="lastname"
            value={customer.lastname}
            onChange={e => handleChange(e)}
            label="Last name"
            fullWidth
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={e => handleChange(e)}
            label="Street address"
            fullWidth
          />
          <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={e => handleChange(e)}
            label="Post code"
            fullWidth
          />
          <TextField
            margin="dense"
            name="city"
            value={customer.city}
            onChange={e => handleChange(e)}
            label="City"
            fullWidth
          />
          <TextField
            margin="dense"
            name="email"
            value={customer.email}
            onChange={e => handleChange(e)}
            label="Email"
            fullWidth
          />
          <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={e => handleChange(e)}
            label="Phone"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button startIcon={<SaveIcon />} onClick={editCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}