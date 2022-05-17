import React from 'react';

import Answer from './Answer';
import Input from './Input';
import Select from './Select';
import Text from './Text';


function Question ({qid, question, tempAnswers, answers, setAnswers, type}) {
    const option = qid + "option"
    return (
        <div>
            <Text variant={"h3"}>
                {question}
            </Text>
            {type === "dd" 
            ? <Select name={option} id={qid} answers={answers} type={""} tempAnswers={tempAnswers} setAnswers={setAnswers}/>
            : type === "tb" 
            ? <Input qid={qid} type={type} tempAnswers={tempAnswers} setAnswers={setAnswers} value={answers[0][1]}/>
            : answers.map((a, i) => {
                const id = qid + "." + i
                return <Answer key={i} id={id} name={option} tempAnswers={tempAnswers} setAnswers={setAnswers} qid={qid} type={type} value={a[0]} checked={i === 0 ? true : false}> {a[1]} </Answer>
                })
            }
        </div>
    )
}

export default Question