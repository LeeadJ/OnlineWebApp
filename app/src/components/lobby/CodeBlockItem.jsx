import React from 'react'
import { fetchSingleCodeBlock } from '../../server';
import './codeBlockItem.css';


const CodeBlockItem = props => {
  const handleButtonClick = async () => {
    const singleBlock = await fetchSingleCodeBlock(props.codeBlock._id);
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
