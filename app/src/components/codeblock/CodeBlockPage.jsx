import React, { useEffect, useState } from 'react'
import { getSingleCodeBlock } from '../../server';

const CodeBlockPage = props => {
    const [singleCodeBlock, setSingleCodeBlock] = useState();

    const updateSingleCodeBlock = async () => {
        const singleBlockRes = await getSingleCodeBlock(props.id);
        setSingleCodeBlock(singleBlockRes);
    }

    useEffect(() => {
        updateSingleCodeBlock();
    }, [props.id]);
    
  return (
    <div>
        {singleCodeBlock && (
            <>
                <h2>{singleCodeBlock.title}</h2>
                <textarea readOnly value={singleCodeBlock.code}></textarea>
            </>
        )}
    </div>
  )
}

export default CodeBlockPage;