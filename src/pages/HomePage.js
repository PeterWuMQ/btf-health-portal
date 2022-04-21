import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

function HomePage ({...props}) {
    return (
        <>
        <Link to="/questionnaire">
            <Button></Button>
        </Link>
        </>
    )
}

export default HomePage