import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material';
import { send } from 'emailjs-com'

function ShareModal ({result}) {
    const [open, setOpen] = useState(false);

    const defaultValues = {
        from_name: '',
        dass: "<table><tr><th>Depression</th><th>Anxiety</th><th>Stress</th></tr><tr><td>" + result[0] + "</td><td>" + result[1] + "</td><td>" + result[2] +" </td></tr></table>",
        to: '',
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(formValues)
        send(
            'service_aglivss',
            'template_0rnvdmq',
            formValues,
            'S_4cGGpjF9Eg9PE98'
        )
        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Share
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle> Share </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To share these results with a friend or family member, please enter your name and the Recipient's Email Address
                    </DialogContentText>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="from_name"
                        label="Your Name"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={formValues.from_name}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="to"
                        label="Recipient's Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={formValues.to}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}> Cancel </Button>
                    <Button onClick={handleSubmit}> Share </Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}

export default ShareModal