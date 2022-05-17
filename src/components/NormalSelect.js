import React from 'react';

import { InputLabel, Select } from '@mui/material';

function NormalSelect ({name, label, id, answers, type, tempAnswers, setAnswers}) {
    return (
        <div>
            <InputLabel id={id}> {label} </InputLabel>
            <Select name={name} id={id} onChange={(event) => {
                    const newArray = tempAnswers
                    newArray[id] = {type, value: event.target.value}
                    setAnswers(newArray)
                }}>
                {answers.map(a => <option value={a[0]}> {a[1]} </option>)}
            </Select>
        </div>
    )
}

export default NormalSelect