import React from 'react';

import NormalText from '../text/NormalText';


function TableHeading ({children}) {
    return (
        <th><NormalText> {children} </NormalText></th>
    )
}

export default TableHeading