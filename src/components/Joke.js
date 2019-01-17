import React from 'react';
import '../style.css'

function Joke(props) {
        return (
            <div className='opSection'>
                <p className='question' style={{display: !props.question && 'none' }}>Question: {props.question}</p>
                <hr style={{display: !props.question && 'none'}} />
                <p className='punchline' style={{color: !props.question && 'red'}}>Punchline: {props.punchline}</p>
            </div>

        )
}

export default Joke;