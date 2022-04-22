import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf'

import Button from '../components/Button'
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';
import Table from '../components/table/Table'

const ref = React.createRef()

function ResultsPage ({tables}) {
    return (
        <div>
            <div ref={ref}>
                <Heading>
                    Your Scores... 
                </Heading>
                
                {tables ? <Table headings={tables.filter(t => t.id === 0)[0].headings} rows={tables.filter(t => t.id === 0)[0].rows}/>
                : <></>}

                <Heading>
                    Scoring Guide
                </Heading>

                {tables ? <Table headings={tables.filter(t => t.id === 1)[0].headings} rows={tables.filter(t => t.id === 1)[0].rows} result={tables.filter(t => t.id === 0)[0].rows}/>
                : <></>}
            </div>

            <NormalText>
                If you would like to download a copy of your results:
            </NormalText>

            <Pdf targetRef={ref} filename="DASS-21 Results">
                {({ toPdf }) => <Button onClick={toPdf}> Download </Button>}
            </Pdf>

            <NormalText>
                If you feel like you would benefit from utilising a service relevant to you, please select "Next". If not, you can close this window, or go "Back Home".
            </NormalText>

            <Link to="/questionnaire2">
                <Button> Next </Button>
            </Link>
            <Link to="/">
                <Button> Back Home </Button>
            </Link>
        </div>
    )
}

export default ResultsPage