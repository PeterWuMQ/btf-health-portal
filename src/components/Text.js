import React from 'react';
import { Typography } from '@mui/material';

function Text ({variant, children}) {
    return (
        <Typography variant={variant}>  {children} </Typography>
    )
}

export default Text