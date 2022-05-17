import React, { useState } from 'react';

import { Input } from '@mui/material';

function NormalInput ({qid, type, tempAnswers, setAnswers, value}) {
    const [val, setVal] = useState(value)
    return (
        <Input type="number" placeholder={val} minlength="4" maxlength="4" onChange={(event) => {
            const newArray = tempAnswers
            newArray[qid] = {type, value: event.target.value}
            setAnswers(newArray)
            setVal(event.target.value)}}></Input>
    )
}

export default NormalInput