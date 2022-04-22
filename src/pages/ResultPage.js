import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button'
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';
import Table from '../components/table/Table'


function ResultsPage ({tables}) {
    return (
        <div>
            <Heading>
                Your Scores... 
            </Heading>
            
            {tables ? <Table headings={tables.filter(t => t.id === 0)[0].headings} rows={tables.filter(t => t.id === 0)[0].rows}/>
            : <></>}

            <Heading>
                Scoring Guide
            </Heading>

            {tables ? <Table headings={tables.filter(t => t.id === 1)[0].headings} rows={tables.filter(t => t.id === 1)[0].rows}/>
            : <></>}

            <NormalText>
                If you would like a copy of your results, or would like to share them with a trust family member or friend, please select from the options below:
            </NormalText>

            <Button> Print </Button>
            <Button> Share </Button>

            <NormalText>
            If you feel like you would benefit from utilising a service relevant to you, please select "Next". If not, you can close this window, or go "Back Home".
            </NormalText>

            <Link to="/questionnaire2">
                <Button> Next </Button>
            </Link>
            <Button> Back Home </Button>
        </div>
    )
}

export default ResultsPage