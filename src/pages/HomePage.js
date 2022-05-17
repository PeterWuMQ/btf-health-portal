import React from 'react';
import { Link } from 'react-router-dom';

import NormalButton from '../components/NormalButton';
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';
import Subheading from '../components/text/Subheading';


function HomePage ({...props}) {
    return (
        <>
            <Heading> Welcome! </Heading>

            <Subheading>
                Online screening can be a helpful way to determine early signs regarding whether someone may be experiencing mental health conditions. {"\n"}{"\n"}
                Mental health conditions such as anxiety, depression and stress are very common and treatable. {"\n"}{"\n"}
                Take the quiz today!
            </Subheading> 

            <Link to="/questionnaire" style={{ textDecoration: 'none' }}>
                <NormalButton variant="outlined"> BEGIN </NormalButton>
            </Link>

            <Subheading>
                Why take the test?
            </Subheading>
            <NormalText> 
                Ever since the unfortunate circumstances that have taken place recently regarding COVID-19, the mental health of employees has been 
                declining due to the stress caused by the pandemic as a result of the inability to physically come into work every day. This is 
                because of the sudden change in human contact which is placed on these employees. It is important to ensure that if any employee’s 
                mental health is negatively affected by these circumstances, no matter how severe, they should be able to have access to support. 
                This portal assists employees of all demographic factors, in detecting possible warning signs regarding stress, anxiety, depression 
                and/or suicide, and guide the employee to a range of appropriate services according to their demographics and condition(s). 
            </NormalText>

            <Subheading>
                What do we use?
            </Subheading>
            <NormalText> 
                This portal applies the use of the widely utilised and recognised DASS-21 questionnaire to screen employees for potential mental 
                health issues.  It will involve a series of questions that evaluate the user’s mental health state in three categories; depression, 
                anxiety, and stress, to screen the user for any potential adverse issues. It will then present a score in each category rated from 
                “normal” (no issues) to “extremely severe” and direct them to the appropriate mental health services based upon their demographic 
                and results. 
            </NormalText>
            <NormalText>
                Please note: the use of this portal is as a substitute for a professional diagnosis. 
            </NormalText>
        </>
    )
}

export default HomePage