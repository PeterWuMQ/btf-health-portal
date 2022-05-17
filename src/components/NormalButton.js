import React from 'react';
import { Button } from '@mui/material';

function NormalButton ({type, onClick, variant, children}) {
    return (
        <Button onClick={onClick} type={type} variant={variant}>
            {children}
        </Button>
    )
}

export default NormalButton