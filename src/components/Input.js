import React, { useState } from 'react';


function Input ({qid, type, tempAnswers, setAnswers, value}) {
    const [val, setVal] = useState(value)
    return (
        <input type="number" placeholder={val} minlength="4" maxlength="4" onChange={(event) => {
            const newArray = tempAnswers
            newArray[qid] = {type, value: event.target.value}
            setAnswers(newArray)
            setVal(event.target.value)}}></input>
    )
}

export default Input