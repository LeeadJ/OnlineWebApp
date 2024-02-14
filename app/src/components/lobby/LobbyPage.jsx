import React from 'react'
import CodeBlockList from './CodeBlockList'

const LobbyPage = props => {
  const handleCodeBlockSelect = (id) => {
    props.setId(id);
  }
  return (
    <div>
        <h1>Choose a code block</h1>
        <p>Click a title to see the code:</p>
        <CodeBlockList setId={handleCodeBlockSelect}/>
    </div>
  )
}

export default LobbyPage;