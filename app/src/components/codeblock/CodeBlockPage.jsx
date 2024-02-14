import React, { useEffect, useState } from 'react'
import { getSingleCodeBlock } from '../../server';
import './CodeBlockPage.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; 



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
        <div className="code-block-page">
            {singleCodeBlock && (
                <>
                    <h2 className="title">{singleCodeBlock.title}</h2>
                    <SyntaxHighlighter language="javascript" style={darcula}>
                        {singleCodeBlock.code}
                    </SyntaxHighlighter>
                </>
            )}
        </div>
    )
}

export default CodeBlockPage;