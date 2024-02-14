import React from 'react'
import { getSingleCodeBlock } from '../../server';



const CodeBlockItem = props => {
  const handleButtonClick = async () => {
    const singleBlock = await getSingleCodeBlock(props.codeBlock._id);
    props.setId(singleBlock._id)
    
  }
  return (
    <li className='codeLI'>
        <button onClick={handleButtonClick} className='codeBtn'> 
            {props.codeBlock.title}
        </button>
    </li>
  )
}

export default CodeBlockItem;
