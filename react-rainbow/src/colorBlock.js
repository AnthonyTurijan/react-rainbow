import React from 'react'

function colorBlock(props){
    return(
        <div className='colorBlock' 
        style={{'backgroundColor' : props.color}} >
            <p>{props.color}</p>
        </div>
    )
}

export default colorBlock