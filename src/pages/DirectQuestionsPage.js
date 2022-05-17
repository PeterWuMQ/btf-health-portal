import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NormalButton from '../components/NormalButton';
import Heading from '../components/text/Heading';
import QuestionList from '../components/lists/QuestionList';
import Subheading from '../components/text/Subheading';


function DirectQuestionsPage ({questions, setResultsDQ}) {
    const [answers, setAnswers] = useState([]) 
    const navigate = useNavigate();

    useEffect(() => {
        if (questions) {
            var tempAnswers = []
            for(var i = 0; i < questions.length; i++) {
                tempAnswers[i] = {type: "", value: questions[i].answers[0][0]}
            }
            setAnswers(tempAnswers)
        }
    }, [questions])

    const handleSubmit = (event) => {
        event.preventDefault()

        setResultsDQ(answers)

        navigate("/recommendations")
    }

    return (
        <div>
            <Heading>
                Questions About You
            </Heading>
            <Subheading>
                By answering these questions, it will help us in providing the most relevant services to you.  
            </Subheading>
            <form onSubmit={handleSubmit}>
                <QuestionList questions={questions} answers={answers} setAnswers={setAnswers}></QuestionList>
                <NormalButton type="submit" variant="outlined"> 
                    Find Services
                </NormalButton>
            </form>
        </div>
    )
}

export default DirectQuestionsPage