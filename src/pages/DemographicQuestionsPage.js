import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Heading from '../components/text/Heading';
import QuestionList from '../components/lists/QuestionList';
import Subheading from '../components/text/Subheading';


function DemographicQuestionsPage ({questions, setResultsDQ}) {
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

        console.log(answers)
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
                <Button type="submit"> 
                    Find Services
                </Button>
            </form>
        </div>
    )
}

export default DemographicQuestionsPage