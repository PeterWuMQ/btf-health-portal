import React, { useState } from 'react';

import { InputLabel, MenuItem, Select } from '@mui/material';

function NormalSelect ({name, label, id, answers, type, tempAnswers, setAnswers}) {
    const [selectedAnswer, setSelectedAnswer] = useState(answers[0][0])
    return (
        <div>
            <Select name={name} id={id} value={selectedAnswer} variant="standard" onChange={(event) => {
                    const newArray = tempAnswers
                    newArray[id] = {type, value: event.target.value}
                    setAnswers(newArray)
                    setSelectedAnswer(event.target.value)
                    console.log(type)
                }}>
                {answers.map(a => <MenuItem value={a[0]}> {a[1]} </MenuItem>)}
            </Select>
        </div>
    )
}

export default NormalSelect