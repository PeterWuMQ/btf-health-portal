import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf'

import NormalButton from '../components/NormalButton'
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';
import Table from '../components/table/Table'
import ShareModal from '../components/ShareModal';

const ref = React.createRef()

function ResultsPage({ tables, result }) {
    const [resultTable, setResultTable] = useState(null)
    useEffect(() => {
        if (tables) {
            let resultTable = tables
            resultTable[0].rows[0] = result
            setResultTable(resultTable[0])
        }
    }, [result, setResultTable, tables])

    return (
        <div>
            <div ref={ref}>
                <Heading>
                    Your Results
                </Heading>

                {resultTable ? <Table headings={resultTable.headings} rows={resultTable.rows} />
                    : <></>}

                <Heading>
                    Results Guide
                </Heading>

                {tables ? <Table headings={tables.filter(t => t.id === 1)[0].headings} rows={tables.filter(t => t.id === 1)[0].rows} result={tables.filter(t => t.id === 0)[0].rows} />
                    : <></>}
            </div>

            <NormalText>
                If you would like to download a copy of your results:
            </NormalText>

            <Pdf targetRef={ref} filename="DASS-21 Results">
                {({ toPdf }) => <NormalButton onClick={toPdf} variant="outlined"> Download </NormalButton>}
            </Pdf>

            <ShareModal/>

            <NormalText>
                If you feel like you would benefit from utilising a service relevant to you, please select "Next". If not, you can close this window, or go "Back Home".
            </NormalText>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <NormalButton variant="outlined"> Back Home </NormalButton>
            </Link>

            <Link to="/questionnaire2" style={{ textDecoration: 'none' }}>
                <NormalButton variant="outlined" > Next </NormalButton>
            </Link>
            
        </div>
    )
}

export default ResultsPage