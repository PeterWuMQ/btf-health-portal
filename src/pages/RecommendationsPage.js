import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';

function RecommendationsPage ({...props}) {
    return (
        <div>
            <Heading>
                Services For You
            </Heading>

            <NormalText>
            Based on your answers, we have generated a list of services which are most relevant to you: {"\n"}{"\n"}
            (for the purpose of demonstrating a User Interface Diagram, let us assume that this particular 
            user has selected that they are between the ages of 18-24, female, speaks Mandarin, and is 
            single, as well as that they would like to see a GP and use an online service)
            </NormalText>

            <table>
                <tr>
                    <th><NormalText> Type of Service </NormalText></th>
                    <th><NormalText> Link to Service </NormalText></th>
                </tr>
                <tr>
                    <td><NormalText> ??? </NormalText></td>
                    <td><NormalText> ??? </NormalText></td>
                </tr>
            </table>

            <Link to="/">
                <Button> Back Home </Button>
            </Link>
        </div>
    )
}

export default RecommendationsPage