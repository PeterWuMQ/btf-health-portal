import React from 'react';


function Select ({name, id, answers, type, tempAnswers, setAnswers}) {
    return (
        <form>
            <select name={name} id={id} onChange={(event) => {
                    const newArray = tempAnswers
                    newArray[id] = {type, value: event.target.value}
                    setAnswers(newArray)
                }}>
                {answers.map(a => <option value={a[0]}> {a[1]} </option>)}
            </select>
        </form>
    )
}

export default Select