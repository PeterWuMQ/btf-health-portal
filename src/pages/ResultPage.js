import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf'

import NormalButton from '../components/NormalButton'
import Text from '../components/Text';
import NormalTable from '../components/NormalTable'
import ShareModal from '../components/ShareModal';
import { Box, Grid, Paper } from '@mui/material';

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
        <Box pt={10}>
            <Grid container spacing={4}>
                <Grid item>
                    <Paper elevation={10}>
                        <Box pt={4} pb={4} pl={6} pr={6}>
                            <Box  pt={3}>
                                <Text variant={"h1"}>
                                    Your Results
                                </Text>
                            

                                {resultTable ? <NormalTable headings={resultTable.headings} rows={resultTable.rows} />
                                : <></>}

                            </Box>
                            <Box pt={6} pb={4}>
                                <Text variant={"h2"}>
                                    Results Guide
                                </Text>

                                {tables ? <NormalTable headings={tables.filter(t => t.id === 1)[0].headings} rows={tables.filter(t => t.id === 1)[0].rows} result={tables.filter(t => t.id === 0)[0].rows} />
                                    : <></>}
                            </Box>
                            <Box pb={3}>
                                <Text>
                                    If you would like to download a copy of your results:
                                </Text>
                            </Box>
                            <Box pb={3}>
                                <Box pb= {1}>
                                    <Pdf targetRef={ref} filename="DASS-21 Results">
                                    {({ toPdf }) => <NormalButton onClick={toPdf} variant="contained"> Download </NormalButton>}
                                    </Pdf>
                                </Box>
                                <ShareModal/>
                            </Box>
                            <Box>
                                <Box pb={3}>
                                    <Text>
                                        If you feel like you would benefit from utilising a service relevant to you, please select "Next". If not, you can close this window, or go "Back Home".
                                    </Text>
                                </Box>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <NormalButton variant="contained"> Back Home </NormalButton>
                                </Link>

                                <Link to="/questionnaire2" style={{ textDecoration: 'none' }}>
                                    <NormalButton variant="contained"> Next </NormalButton>
                                </Link>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultsPage