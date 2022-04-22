import React from 'react';

import TableHeading from './TableHeading';
import TableRow from './TableRow';


function Table ({headings, rows, result}) {
    return (
        <table>
            <tbody>
                <tr>
                    {headings.map(h => <TableHeading key={h}> {h} </TableHeading>)}
                </tr>
                {rows.map((r, i) => <TableRow key={r} rowItems={r} result={result} index={i}/>)}
            </tbody>
        </table>
    )
}

export default Table