import React from 'react';
import Answer from './Answer';
import Select from './Select';


function Question ({qid, question, tempAnswers, answers, setAnswers, type}) {
    const option = qid + "option"
    return (
        <div>
            <p>
                {question}
            </p>
            {type === "dd" 
            ? <Select name={option} id={qid} answers={answers} type={""} tempAnswers={tempAnswers} setAnswers={setAnswers}/>
            : answers.map((a, i) => {
                const id = qid + "." + i
                return i === 0 
                ? <Answer key={i} id={id} name={option} tempAnswers={tempAnswers} setAnswers={setAnswers} qid={qid} type={type} value={a[0]} checked={true}> {a[1]} </Answer>
                : <Answer key={i} id={id} name={option} tempAnswers={tempAnswers} setAnswers={setAnswers} qid={qid} type={type} value={a[0]}> {a[1]} </Answer>
                })
            }
        </div>
    )
}

export default Question