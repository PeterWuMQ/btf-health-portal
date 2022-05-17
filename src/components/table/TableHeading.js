import React from 'react';

import Text from '../Text';


function TableHeading ({children}) {
    return (
        <th><Text> {children} </Text></th>
    )
}

export default TableHeading