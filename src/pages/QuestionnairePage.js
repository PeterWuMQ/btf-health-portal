import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import QuestionList from '../components/lists/QuestionList';

function QuestionnairePage ({questions, setResult}) {
    const [answers, setAnswers] = useState([]) 
    var tempAnswers = []

    React.useEffect(() => {
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <QuestionList questions={questions} answers={answers} setAnswers={setAnswers}></QuestionList>

                    <Button type="submit"> Submit </Button>

            </form>
        </div>
    )
}

export default QuestionnairePage