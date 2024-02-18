import React from 'react'
import CodeBlockList from './CodeBlockList'
import './lobbyPage.css';

const LobbyPage = props => {
  const handleCodeBlockSelect = (id) => {
    props.setId(id);
  }
  return (
    <div className="lobby-container">
        <h1 className="lobby-title">Choose a code block</h1>
        <p className="lobby-description">Click a title to see the code:</p>
        <CodeBlockList setId={handleCodeBlockSelect}/>
    </div>
  )
}

export default LobbyPage;