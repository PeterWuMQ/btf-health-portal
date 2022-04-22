import React from 'react';

import NormalText from '../text/NormalText';


function TableRow ({rowItems, result, index}) {
    const colour = index === 0 ? "green" : index === 1 ? "blue" : index === 2 ? "yellow" : index === 3 ? "orange" : "red"
    return (
        <tr>
            {result ? rowItems.map((r, i) => {
                if (i !== 0) {
                    var temp = r.match(/[0-9]+/g)
                    return <td bgcolor={(temp.length === 1 && result[0][i - 1] >= temp[0]) || (result[0][i - 1] >= temp[0] && result[0][i - 1] <= temp[1]) ? colour : null} key={i + ".1"}><NormalText key={i + ".2"}> {r} </NormalText></td>
                } else {
                    return <td key={i + ".1"}><NormalText key={i + ".2"}> {r} </NormalText></td>
                }

            })
            : rowItems.map((r, i) => <td key={i + ".1"}><NormalText key={i + ".2"}> {r} </NormalText></td>)}
        </tr>
    )
}

export default TableRow