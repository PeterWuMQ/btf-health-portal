import React from 'react';

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Input from './Input';
import Select from './NormalSelect';


function Question ({qid, question, tempAnswers, answers, setAnswers, type}) {
    const option = qid + "option"
    return (
        <div>
            <p>
                {question}
            </p>
            {type === "dd" 
            ? <Select name={option} id={qid} answers={answers} type={""} tempAnswers={tempAnswers} setAnswers={setAnswers}/>
            : type === "tb" 
            ? <Input qid={qid} type={type} tempAnswers={tempAnswers} setAnswers={setAnswers} value={answers[0][1]}/>
            : <RadioGroup
                defaultValue={answers[0][0]}
                name={option}
                onChange={(event) => {
                    const newArray = tempAnswers
                    newArray[qid] = {type, value: event.target.value}
                    setAnswers(newArray)
                    }}
                >
                {answers.map((a, i) => {
                    console.log(a)
                    return <FormControlLabel value={a[0]} control={<Radio/>} label={a[1]}/> 
                })}
                </RadioGroup>
            }
        </div>
    )
}

export default Question