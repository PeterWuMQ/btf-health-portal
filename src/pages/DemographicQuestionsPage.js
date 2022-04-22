import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Heading from '../components/text/Heading';
import QuestionList from '../components/lists/QuestionList';
import Subheading from '../components/text/Subheading';

function DemographicQuestionsPage ({questions, setResultDQ}) {
    const [answers, setAnswers] = useState([]) 
    var tempAnswers = []
    var tempTemp = questions.slice(0, 5)

    React.useEffect(() => {
        for(var i = 0; i < 21; i++) {
            tempAnswers[i] = {type: "", value: 0}
        }
        setAnswers(tempAnswers)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <Heading>
                Questions About You... 
            </Heading>
            <Subheading>
                By answering these questions, it will help us in providing the most relevant services to you.  
            </Subheading>
            <form onSubmit={handleSubmit}>
                <QuestionList questions={tempTemp} answers={answers} setAnswers={setAnswers}></QuestionList>
                <Link to="/recommendations">
                    <Button type="submit"> 
                        Find Services
                    </Button>
                </Link>

            </form>
        </div>
    )
}

export default DemographicQuestionsPage