import React, { useState} from 'react'

const UseStateBasic = () => {
    const [text, setText] = useState('helo')
    const handleClick = () => {
        if (text === 'helo') {
            setText('le quynh huong')
        } else {
            setText('heloo!!!')
        }
    }
    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button type={'button'} className={'btn'} onClick={handleClick}>change title</button>
        </React.Fragment>
    )
}

export default UseStateBasic;