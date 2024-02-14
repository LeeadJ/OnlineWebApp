import React, { useEffect, useState } from 'react'
import CodeBlockItem from './CodeBlockItem';
import { getCodeBlocks } from '../../server';

const CodeBlockList = props => {
  const [codeBlocks, setCodeBlocks] = useState()

  const updateCodeBlocks = async () => {
    const codeBlocksRes = await getCodeBlocks()
    setCodeBlocks(codeBlocksRes)
  }

  useEffect(() => {
    updateCodeBlocks()
  }, [])

  return (
    <ul className='codeUL'>
      {
        codeBlocks?.map(block => {
          // console.log("BlockID: " ,block._id)
          return <CodeBlockItem key={block._id} codeBlock={block} setId={props.setId}/>;
        })
      }
    </ul>
  );
}

export default CodeBlockList;