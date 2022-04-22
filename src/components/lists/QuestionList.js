import React from 'react';

import Question from '../Question'

function QuestionList ({questions, answers, setAnswers}) {
    return (
        <ul>
            {questions ? questions.map(q => 
                <Question key={q.id} id={q.id} type={q.type} answers={answers} setAnswers={setAnswers} question={q.question} answer1={q.answer1} answer2={q.answer2} answer3={q.answer3} answer4={q.answer4}></Question>)
                : <></>}
        </ul>
    )
}

export default QuestionList