import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField } from '@mui/material';

function ShareModal ({...props}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
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
                        label="Your Name"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Recipient's Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}> Cancel </Button>
                    <Button onClick={handleClose}> Share </Button>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}

export default ShareModal