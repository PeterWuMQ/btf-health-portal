import React from 'react';

function Button ({type, children}) {
    return (
        <button type={type}>
            {children}
        </button>
    )
}

export default Button