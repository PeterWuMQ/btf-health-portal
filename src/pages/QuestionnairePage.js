import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import QuestionList from '../components/lists/QuestionList';
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';

function QuestionnairePage ({questions, setResult, tables, setTables}) {
    const [answers, setAnswers] = useState([]) 
    const navigate = useNavigate();
    var tempAnswers = []

    useEffect(() => {
        for(var i = 0; i < 21; i++) {
            tempAnswers[i] = {type: "", value: 0}
        }
        setAnswers(tempAnswers)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const s = answers.filter(a => a.type === 's').reduce((total, a) => + total + a.value, 0)
        const a = answers.filter(a => a.type === 'a').reduce((total, a) => + total + a.value, 0)
        const d = answers.filter(a => a.type === 'd').reduce((total, a) => + total + a.value, 0)

        setResult([d, a, s])

        if(tables) {
            let resultTable = tables
            resultTable[0].rows[0] = [d, a, s]
            setTables(resultTable)
        }

        navigate("/results")
    }

    return (
        <div>
            <Heading>
                Depression, Anxiety and Stress Scale 21 (DASS-21) 
            </Heading>
            <NormalText>
                Please carefully read each statement and select the option with which you most agree. {"\n"}{"\n"}
                Try to not overthink or spend too much time on each question, just simply consider which option most applies to you regarding your feelings over the past week. 
            </NormalText>

            <form onSubmit={handleSubmit}>
                <QuestionList questions={questions} answers={answers} setAnswers={setAnswers}></QuestionList>
                <Button type="submit"> 
                    See Your Results 
                </Button>
            </form>
        </div>
    )
}

export default QuestionnairePage