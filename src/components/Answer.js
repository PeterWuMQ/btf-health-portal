import React from 'react';


function Answer ({id, name, tempAnswers, setAnswers, qid, type, value, checked, children}) {
    return (
        <div>
            <label htmlFor={id}>
            <input type='radio' name={name} value={value} id={id} defaultChecked={checked ? true : false} onChange={(event) => {const newArray = tempAnswers
                newArray[qid] = {type, value: parseInt(event.target.value)}
                setAnswers(newArray)
                }}/>
            {children}</label>
        </div>
    )
}

export default Answer