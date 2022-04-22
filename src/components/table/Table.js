import React, { useEffect } from 'react';
import TableHeading from './TableHeading';
import TableRow from './TableRow';

function Table ({headings, rows}) {
    return (
        <table>
            <tbody>
                <tr>
                    {headings.map(h => <TableHeading key={h}> {h} </TableHeading>)}
                </tr>
                {rows.map(r => <TableRow key={r} rowItems={r}/>)}
            </tbody>
        </table>
    )
}

export default Table