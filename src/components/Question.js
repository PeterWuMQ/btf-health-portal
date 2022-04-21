import React from 'react';

function Question ({id, question, answer1, answer2, answer3, answer4, answers, setAnswers, type}) {
    const key1 = id + "1"
    const key2 = id + "2"
    const key3 = id + "3"
    const key4 = id + "4"
    const option = id + "option"


    return (
        <div>
            <p>
                {question}
            </p>
            <div>
                <label for={key1}>
                <input type='radio' name={option} value='0' id={key1} onChange={(event) => {const newArray = answers
                newArray[id] = {type, value: 0}
                setAnswers(newArray)
                }}/>
                {answer1}</label>
                <span id='result-11'></span>
            </div>
            <div>
                <label for={key2}>
                <input type='radio' name={option} value='1' id={key2} onChange={(event) => {const newArray = answers
                newArray[id] = {type, value: 1}
                setAnswers(newArray)
                }}/>
                {answer2}</label>
                <span id='result-12'></span>
            </div>
            <div>
                <label for={key3}>
                <input type='radio' name={option} value='2' id={key3} onChange={(event) => {const newArray = answers
                newArray[id] = {type, value: 2}
                setAnswers(newArray)
                }}/>
                {answer3}</label>
                <span id='result-12'></span>
            </div>
            <div>
                <label for={key4}>
                <input type='radio' name={option} value='3' id={key4} onChange={(event) => {const newArray = answers
                newArray[id] = {type, value: 3}
                setAnswers(newArray)
                }}/>
                {answer4}</label>
                <span id='result-12'></span>
            </div>
        </div>
    )
}

export default Question