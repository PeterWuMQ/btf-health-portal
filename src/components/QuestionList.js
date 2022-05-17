import React from 'react';

import Question from './Question';


function QuestionList ({questions, answers, setAnswers}) {
    return (
        <ul>
            {questions ? questions.map(q => 
                <Question key={q.id} qid={q.id} type={q.type} tempAnswers={answers} setAnswers={setAnswers} question={q.question} answers={q.answers}></Question>)
                : <></>}
        </ul>
    )
}

export default QuestionList