import React from 'react'
import '../style.css'


function TodoItem() {
    return (
        <div className='checkboxSection'>
            <span>
                <p className='checkboxSelection'><input type='checkbox' />Option 1</p>
            </span>
            <span>
                <p className='checkboxSelection'><input type='checkbox' />Option 2</p>
            </span>
            <span>
                <p className='checkboxSelection'><input type='checkbox' />Option 3</p>
            </span>
        </div>
    )
}

export default TodoItem