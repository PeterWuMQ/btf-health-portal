import { Box, Grid, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NormalButton from '../components/NormalButton';
import QuestionList from '../components/QuestionList';
import Text from '../components/Text';

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
            <Box pt={10} pb={10}>
                <Grid container spacing={4}>
                    <Grid>
                        <Paper>
                            <Box pt={4} pb={4} pl={4} pr={4}>
                                <Box pb={3}>
                                    <Text variant={"h1"}>
                                        Questions About You
                                    </Text>
                                </Box>
                                
                            <Text>
                                By answering these questions, it will help us in providing the most relevant services to you.  
                            </Text>
                            <form onSubmit={handleSubmit}>
                                <QuestionList questions={questions} answers={answers} setAnswers={setAnswers}></QuestionList>
                                <Box pt={2}>
                                    <NormalButton type="submit" variant="outlined"> 
                                        Find Services
                                    </NormalButton>
                                </Box>
                            </form>
                            </Box>
                        </Paper>
                    </Grid>
                
                </Grid>
            </Box>
        </div>
    )
}

export default DirectQuestionsPage