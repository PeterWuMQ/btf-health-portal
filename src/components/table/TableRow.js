import React from 'react';

import Text from '../Text';


function TableRow ({rowItems, result, index}) {
    const colour = index === 0 ? "green" : index === 1 ? "blue" : index === 2 ? "yellow" : index === 3 ? "orange" : "red"

    return (
        <tr>
            {result ? rowItems.map((r, i) => {
                var temp = r.match(/[0-9]+/g)
                return i !== 0 
                ? (temp.length === 1 && result[0][i - 1] >= temp[0]) || (result[0][i - 1] >= temp[0] && result[0][i - 1] <= temp[1])
                ? <td bgcolor={colour} key={i + ".1"}><Text key={i + ".2"}> {r} </Text></td>
                : <td key={i + ".1"}><Text key={i + ".2"}> {r} </Text></td>
                : <td key={i + ".1"}><Text key={i + ".2"}> {r} </Text></td>
            })
            : rowItems.map((r, i) => {
                if(Array.isArray(r)) {
                    return <td key={i + ".1"}> {r.map((t, i2) => <Text key={i + i2 + ".2"}> {t} </Text>)}</td>
                } else {
                    return <td key={i + ".1"}><Text key={i + ".2"}> {r} </Text></td>
                } 
                })}
        </tr>
    )
}

export default TableRow