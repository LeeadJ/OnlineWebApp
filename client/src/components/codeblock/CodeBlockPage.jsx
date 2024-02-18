import React, { useEffect, useState, useRef } from 'react'
import { fetchSingleCodeBlock, updateSingleCodeBlock } from '../../server';
import './CodeBlockPage.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CodeBlockPage = props => {
    const [singleCodeBlock, setSingleCodeBlock] = useState();
    const textareaRef = useRef(null);


    const getSingleCodeBlock = async () => {
        const singleBlockRes = await fetchSingleCodeBlock(props.id);
        setSingleCodeBlock(singleBlockRes);
    }

    useEffect(() => {
        getSingleCodeBlock();
    }, [props.id]);

    const goToLobbyPage = () => {
        props.setId(null);
    }

    const saveCodeBlock = async () => {
        updateSingleCodeBlock(singleCodeBlock);
    }

    return (
        <div className="code-block-page">
            {singleCodeBlock && <h2 className="title">{singleCodeBlock.title}</h2>}
            <button className="goToLobbyBtn" onClick={goToLobbyPage}>Go to Lobby</button>
            <div className='saveBtnContainer'>
                <button className='saveBtn' onClick={saveCodeBlock}>Save</button>
            </div>


            {singleCodeBlock && (
                <>
                    {/* reference highlighter editable: https://www.haydenbleasel.com/blog/making-react-syntax-highlighter-editable */}
                    <div
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => textareaRef.current?.focus()}
                        onClick={() => textareaRef.current?.focus()}
                        style={{ display: "flex", position: "relative" }}
                    >
                        <textarea
                            ref={textareaRef}
                            className="absolute inset-0 resize-none bg-transparent p-2 font-mono text-transparent caret-white outline-none"
                            value={singleCodeBlock.code}
                            onChange={(e) => setSingleCodeBlock({ ...singleCodeBlock, code: e.target.value })}
                        />
                        <SyntaxHighlighter
                            language="javascript"
                            style={darcula}
                            customStyle={{
                                flex: '1',
                                background: 'transparent',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                        {singleCodeBlock.code}
                    </SyntaxHighlighter>
                </div>

        </>
    )
}
        </div >
    )
}

export default CodeBlockPage;