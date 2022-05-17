import { TableContainer, TableHead, TableRow, Table, TableCell, TableBody, Typography } from '@mui/material';
import React from 'react';

function NormalTable ({headings, rows, result}) {
    return (
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    {headings.map(h => <TableCell> {h} </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((r, i) => {
                        const colour = i === 0 ? "#A8F0C0" : i === 1 ? "#C2EDFF" : i === 2 ? "#FFDE83" : i === 3 ? "#FFA771" : "#FF6378"
                        return <TableRow key={r} rowItems={r}>
                            {r.map((t, i2) => {
                                const temp = t.toString().match(/[0-9]+/g)
                                    if(result && i2 !== 0) {
                                        const temp2 = result[0][i2 - 1]
                                        if((temp.length === 1 && temp2 > temp[0]) || (temp2 >= temp[0] && temp2 <= temp[1])) {
                                            return <TableCell style={{backgroundColor: colour, color: 'black',}}> {t} </TableCell>
                                        }
                                    }
                                return <TableCell> {t.toString().split("\\n").map((p) => <Typography> {p} </Typography>)} </TableCell>
                                }
                            )}
                        </TableRow>})}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default NormalTable