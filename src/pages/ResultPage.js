import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button'
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';

function ResultsPage ({result}) {
    return (
        <div>
            <Heading>
                Your Scores ... 
            </Heading>

            <table>
                <tr>
                    <th><NormalText> Depression </NormalText></th>
                    <th><NormalText> Anxiety </NormalText></th>
                    <th><NormalText> Stress </NormalText></th>
                </tr>
                <tr>
                    <td><NormalText> placeholder </NormalText></td>
                    <td><NormalText> placeholder </NormalText></td>
                    <td><NormalText> placeholder </NormalText></td>
                </tr>
            </table>

            <Heading>
                Scoring Guide
            </Heading>

            <table>
                <tr>
                    <th><NormalText> Severity </NormalText></th>
                    <th><NormalText> Depression </NormalText></th>
                    <th><NormalText> Anxiety </NormalText></th>
                    <th><NormalText> Stress </NormalText></th>
                </tr>
                <tr>
                    <td><NormalText> Normal </NormalText></td>
                    <td><NormalText> 0 - 4 </NormalText></td>
                    <td><NormalText> 0 - 3 </NormalText></td>
                    <td><NormalText> 0 - 7 </NormalText></td>
                </tr>
                <tr>
                    <td><NormalText> Mild </NormalText></td>
                    <td><NormalText> 5 - 6 </NormalText></td>
                    <td><NormalText> 4 - 5 </NormalText></td>
                    <td><NormalText> 8 - 9 </NormalText></td>
                </tr>
                <tr>
                    <td><NormalText> Moderate </NormalText></td>
                    <td><NormalText> 7 - 10 </NormalText></td>
                    <td><NormalText> 6 - 7 </NormalText></td>
                    <td><NormalText> 10 - 12 </NormalText></td>
                </tr>
                <tr>
                    <td><NormalText> Severe </NormalText></td>
                    <td><NormalText> 11 - 13 </NormalText></td>
                    <td><NormalText> 8 - 9 </NormalText></td>
                    <td><NormalText> 13 - 16 </NormalText></td>
                </tr>
                <tr>
                    <td><NormalText> Extemely Severe </NormalText></td>
                    <td><NormalText> 14+ </NormalText></td>
                    <td><NormalText> 10+ </NormalText></td>
                    <td><NormalText> 17+ </NormalText></td>
                </tr>
            </table>

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