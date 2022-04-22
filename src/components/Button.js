import React from 'react';


function Button ({type, onClick, children}) {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button