import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import NormalButton from '../components/NormalButton';
import Text from '../components/Text';
import QuestionList from '../components/lists/QuestionList';


function QuestionnairePage ({questions, setResult, tables, setTables}) {
    const [answers, setAnswers] = useState([]) 
    const navigate = useNavigate();
   
    useEffect(() => {
        var tempAnswers = []
        for(var i = 0; i < questions.length; i++) {
            tempAnswers[i] = {type: "", value: 0}
        }
        setAnswers(tempAnswers)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const s = answers.filter(a => a.type === 's').reduce((total, a) => total + parseInt(a.value), 0)
        const a = answers.filter(a => a.type === 'a').reduce((total, a) => total + parseInt(a.value), 0)
        const d = answers.filter(a => a.type === 'd').reduce((total, a) => total + parseInt(a.value), 0)

        setResult([d, a, s])

        navigate("/results")
    }

    return (
        <div>
            <Text variant={"h1"}>
                Depression, Anxiety and Stress Scale 21 (DASS-21) 
            </Text>
            <Text variant={"h3"}>
                Please carefully read each statement and select the option with which you most agree. {"\n"}{"\n"}
                Try to not overthink or spend too much time on each question, just simply consider which option most applies to you regarding your feelings over the past week. 
            </Text>

            <form onSubmit={handleSubmit}>
                <QuestionList questions={questions} answers={answers} setAnswers={setAnswers}></QuestionList>
                <NormalButton type="submit" variant="outlined"> 
                    See Your Results 
                </NormalButton>
            </form>
        </div>
    )
}

export default QuestionnairePage