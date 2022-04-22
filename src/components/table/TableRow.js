import React from 'react';

import NormalText from '../text/NormalText';


function TableRow ({rowItems}) {
    return (
        <tr>
            {rowItems.map((r, i) => <td key={i + ".1"}><NormalText key={i + ".2"}> {r} </NormalText></td>)}
        </tr>
    )
}

export default TableRow